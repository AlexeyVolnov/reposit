'use strict';


const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--temp');
const inputElevation = document.querySelector('.form__input--climb');
let map;
let coords;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            let {longitude, latitude} = position.coords;
            coords = [latitude, longitude]
            map = L.map('map').setView(coords, 14);
            L.tileLayer(
                'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }
            ).addTo(map);
        },
        function () {
            console.log('Включите доступ к местоположению')
        })
}

let formInfo = null;
form.addEventListener('submit',function (){
    map.on('click', function (e) {
        const {lat, lng} = e.latlng;
        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(L.popup({
                maxWidth: 350,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup',

            }))
            .setPopupContent('dsfa')
            .openPopup();

        form.classList.remove('hidden');
        inputDistance.focus()
    })
})

console.log(formInfo)