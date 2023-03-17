'use strict';


const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputTemp = document.querySelector('.form__input--temp');
const inputClimb = document.querySelector('.form__input--climb');
let map,mapEvent;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            let {longitude, latitude} = position.coords;
            
            map = L.map('map').setView([latitude,longitude], 14);
            L.tileLayer(
                'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }
            ).addTo(map);
            map.on('click', function (e) {
                mapEvent = e
                form.classList.remove('hidden');
                inputDistance.focus()
            })
        },
        function () {
            console.log('Включите доступ к местоположению')
        })
}

form.addEventListener('submit',function (e){
e.preventDefault();
    const {lat, lng} = mapEvent.latlng;
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(L.popup(
            {
                maxWidth: 350,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup',
            }))
        .setPopupContent('dsfa')
        .openPopup();
    form.querySelectorAll(`.form__input:not(.form__input--type)`).forEach(input=>{
        input.value = ''
    })
    form.classList.add('hidden')
})


inputType.addEventListener('change',function (){
    inputClimb.closest('.form__row').classList.toggle('form__row--hidden');
    inputTemp.closest('.form__row').classList.toggle('form__row--hidden')
})




