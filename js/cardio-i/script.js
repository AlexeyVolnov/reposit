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
        const distance = +inputDistance.value
        const checkNumbers = (...numbers)=>numbers.every(number=>Number.isFinite(number))
        const checkNumbersPositive = (...numbers)=>numbers.every(number=>number>0)



        //clearing input fields
        const formFieldsNotType = form.querySelectorAll(`.form__input:not(.form__input--type)`)




        //  if the workout is a run create object Running
        if (type === 'running') {
            //data validity check
            const temp = +inputTemp.value;

             if(!checkNumbers(duration,distance,temp) || !checkNumbersPositive(duration,distance,temp)){
             alert('Введите положительное число')
                 console.log(duration,distance,temp)
            }
        }
        // if the workout is a cycling create object Cycling
        if (type === 'cycling') {
            const climb = +inputClimb.value;
            //data validity check
            if(!checkNumbers(duration,distance,climb) || !checkNumbersPositive(duration,distance)){
              alert('Введите положительное число')
            }
        }
        //add new Object in a workout Array

        // display the workout on the map

        // display the workout in the list

        formFieldsNotType.forEach(input => {
            input.value = ''
        })
        form.classList.add('hidden')
        const {lat, lng} = this.#mapEvent.latlng;
        L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(L.popup(
                {
                    maxWidth: 350,
                    autoClose: false,
                    closeOnClick: false,
                    className: 'running-popup',
                }))
            .setPopupContent('dsfa')
            .openPopup();
    }

}


class Workout {
    date = new Date();
    id = Date.now();

    constructor(name, distance, duration, coords) {
        this.name = name;
        this.distance = distance;
        this.duration = duration;
        this.coords = coords;
    }

}

class Running extends Workout {
    constructor(name, distance, duration, coords, temp, pace) {
        super(name, distance, duration, coords);
        this.temp = temp;
        this.calculatePace()
    }

    calculatePace() {
        this.pace = this.duration / this.distance
    }

}

class Cycling extends Workout {
    constructor(name, distance, duration, coords, climb, speed) {
        super(name, distance, duration, coords);
        this.climb = climb;
        this.calculateSpeed()

    }

    calculateSpeed() {
        this.speed = this.distance / this.duration / 60
    }
}

const app = new App()
