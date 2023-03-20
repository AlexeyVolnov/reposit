'use strict';


const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputTemp = document.querySelector('.form__input--temp');
const inputClimb = document.querySelector('.form__input--climb');
const workoutHint = document.querySelector('.workout-hint')
const resetWorkouts = document.querySelector('.setting-reset-workouts')
const changeMaps = document.querySelector('.setting-maps')

class App {
    #map;
    #mapEvent;
    #workouts = []
    maps = [
        {
            link: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            copyright: {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }
        },
        {
            link: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
            copyright: {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
            }
        },
        {
            link: 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
            copyright: {
                maxZoom: 20,
                attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            }
        }
    ]
    indexMap = +JSON.parse(localStorage.getItem('indexMap')) || 0
    constructor() {
        this._getPosition();
        this._localStorageData()
        this._hintToAddWorkout()
        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleClimbField)
        containerWorkouts.addEventListener('click', this._moveToWorkout.bind(this))
        resetWorkouts.addEventListener('click', this.reset.bind(this))
        changeMaps.addEventListener('click', this.changeMapsView.bind(this))
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                function () {
                    console.log('Включите доступ к местоположению')
                })
        }
    }

    _loadMap(position) {
        let {longitude, latitude} = position.coords;
        this.#map = L.map('map').setView([latitude, longitude], 14);
        L.tileLayer(this.maps[this.indexMap].link, this.maps[this.indexMap].copyright).addTo(this.#map);
        this.#map.on('click', this._showForm.bind(this))
        this.#workouts.forEach(workout => this._displayWorkout(workout))
    };

    _showForm(e) {
        workoutHint.classList.add('hidden')
        form.classList.remove('hidden');
        this.#mapEvent = e
        inputDistance.focus()
    };

    _toggleClimbField() {
        inputClimb.closest('.form__row').classList.toggle('form__row--hidden');
        inputTemp.closest('.form__row').classList.toggle('form__row--hidden')
    };

    _newWorkout(e) {
        e.preventDefault()
        //get data from form
        const duration = +inputDuration.value;
        const type = inputType.value
        const distance = +inputDistance.value;
        const formFieldsNotType = form.querySelectorAll(`.form__input:not(.form__input--type)`);
        const checkNumbers = (...numbers) => numbers.every(number => Number.isFinite(number))
        const checkNumbersPositive = (...numbers) => numbers.every(number => number > 0)
        const {lat, lng} = this.#mapEvent.latlng;
        let workout;


        //  if the workout is a run create object
        if (type === 'running') {
            //data validity check
            const temp = +inputTemp.value;
            if (!checkNumbers(duration, distance, temp) || !checkNumbersPositive(duration, distance, temp)) {
                alert('Введите положительное число')
                return;
            }
            workout = new Running(distance, duration, [lat, lng], temp)


        }
        if (type === 'cycling') {
            const climb = +inputClimb.value;
            //data validity check
            if (!checkNumbers(duration, distance, climb) || !checkNumbersPositive(duration, distance)) {
                alert('Введите положительное число')
                return
            }
            workout = new Cycling(distance, duration, [lat, lng], climb)

        }
        //add new Object in a workout Array
        this.#workouts.push(workout)
        this._saveToLocalStorage()
        // display the workout on the map

        // display the workout in the list
        formFieldsNotType.forEach(input => {
            input.value = ''
        })
        form.classList.add('hidden')

        this._displayWorkout(workout)
    };

    _displayWorkout(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(L.popup(
                {
                    maxWidth: 350,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                }))
            .setPopupContent(`${workout.type === 'running' ? '🏃 Пробежка' : '🚵‍♂️ Велотренировка'} ${workout.date}`)
            .openPopup();

        this._addWorkoutOnSideBar(workout)
    }

    _addWorkoutOnSideBar(workout) {
        const html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.type === 'running' ? 'Пробежка' : 'Велотренировка'} ${workout.date}</h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃' : '🚵‍♂️'}</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">км</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">мин</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">📏⏱</span>
          <span class="workout__value">${workout.type === 'running' ? workout.pace.toFixed(2) : workout.speed.toFixed(2)}</span>
          <span class="workout__unit">${workout.type === 'running' ? 'мин/км' : 'км/ч'}</span>
        </div>
        <div class="workout__details">
        
          <span class="workout__icon">${workout.type === 'running' ? '👟⏱' : '🏔'}</span>
          <span class="workout__value">${workout.temp || workout.climb}</span>
          <span class="workout__unit">${workout.type === 'running' ? 'шаг/мин' : 'м'}</span>
        </div>
      </li>`;
        containerWorkouts.insertAdjacentHTML('beforeend', html);
    }

    _moveToWorkout(e) {
        const workoutElement = e.target.closest('.workout')
        if (!workoutElement) return
        const workout = this.#workouts.find(item => item.id === +workoutElement.getAttribute('data-id'))
        this.#map.setView(workout.coords, 17, {animate: true, pan: {duration: 1}})


    }

    _saveToLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts))
    }

    _hintToAddWorkout() {
        if (this.#workouts.length === 0) {
            workoutHint.classList.remove('hidden')
        }
    }

    _localStorageData() {
        const data = JSON.parse(localStorage.getItem('workouts'))
        if (!data) return;
        this.#workouts = data;
    }

    reset() {
        localStorage.removeItem('workouts');
        location.reload()
    }

    changeMapsView() {
        this.indexMap === this.maps.length-1?this.indexMap = 0:++this.indexMap
        localStorage.setItem('indexMap',JSON.stringify(this.indexMap))
        location.reload()
    }
}

class Workout {
    date = this._date
    id = Date.now();

    constructor(distance, duration, coords) {
        this.distance = distance;
        this.duration = duration;
        this.coords = coords;
    }

    get _date() {
        const dateFormat = new Intl.DateTimeFormat(navigator.language, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        });
        return dateFormat.format(new Date());
    }

}

class Running extends Workout {
    type = 'running'

    constructor(distance, duration, coords, temp) {
        super(distance, duration, coords);
        this.temp = temp;
        this.calculatePace()
    }

    calculatePace() {
        this.pace = this.duration / this.distance
    }

}

class Cycling extends Workout {
    type = 'cycling'

    constructor(distance, duration, coords, climb) {
        super(distance, duration, coords);
        this.climb = climb;
        this.calculateSpeed()
    }

    calculateSpeed() {
        this.speed = this.distance / this.duration / 60
    }
}

const app = new App()
