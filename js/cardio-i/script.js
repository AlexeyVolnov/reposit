'use strict';


const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputTemp = document.querySelector('.form__input--temp');
const inputClimb = document.querySelector('.form__input--climb');


class App {
    #map;
    #mapEvent;
    #workouts = []

    constructor() {

        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleClimbField)
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
        L.tileLayer(
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }
        ).addTo(this.#map);
        this.#map.on('click', this._showForm.bind(this))
    };

    _showForm(e) {
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

        //clearing input fields


        //  if the workout is a run create object
        if (type === 'running') {
            //data validity check
            const temp = +inputTemp.value;
            if (!checkNumbers(duration, distance, temp) || !checkNumbersPositive(duration, distance, temp)) {
                alert('Введите положительное число')
                console.log(duration, distance, temp)
            }
            workout = new Cycling(distance, duration, [lat, lng], temp)


        }
        if (type === 'cycling') {
            const climb = +inputClimb.value;
            //data validity check
            if (!checkNumbers(duration, distance, climb) || !checkNumbersPositive(duration, distance)) {
                alert('Введите положительное число')
            }
            workout = new Running(distance, duration, [lat, lng], climb)

        }
        //add new Object in a workout Array
        this.#workouts.push(workout)
        // display the workout on the map

        // display the workout in the list
        formFieldsNotType.forEach(input => {
            input.value = ''
        })
        form.classList.add('hidden')
        this._displayWorkout(workout)
    };
    _displayWorkout(workout){
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(L.popup(
                {
                    maxWidth: 350,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                }))
            .setPopupContent('dsfa')
            .openPopup();
    }
}


class Workout {
    date = new Date();
    id = Date.now();

    constructor(distance, duration, coords) {
        this.distance = distance;
        this.duration = duration;
        this.coords = coords;
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
