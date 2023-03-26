'use strict';

const countries = document.querySelector('.countries');
const menuCountries = document.querySelector('.menu-countries');


const listCountries = fetch('https://restcountries.com/v3.1/all')
listCountries
    .then(response=>response.json()).then(data=>{
    data.forEach(countries => {
        const html = `<li class='countries-name'>${countries.name.common}</li>`;
        menuCountries.insertAdjacentHTML('beforeend', html);
    });
})

menuCountries.addEventListener('click', function(e) {
  if (e.target.closest('.countries-name')) {
    countries.querySelectorAll('.country').forEach(country => country.remove());
    countries.style.opacity = '0';
    const targetCountries = e.target.closest('.countries-name').textContent;
    getCountryData(targetCountries);
  }

});


getCountryData('russia');

function displayCountries(data, className) {
  const currency = data.currencies;
  const currencyName = Object.values(currency)[0].name;
  const currencySymbol = Object.values(currency)[0].symbol;
  const languages = Object.values(data.languages)[0];

  const html = `
          <article class='country ${className || ''}'>
          <img class='country__img' src='${data.flags.svg}' alt='${data.flags.alt}'/>
          <div class='country__data'>
            <h3 class='country__name'>${data.name.common}</h3>
            <h4 class='country__region'>${data.region}</h4>
            <p class='country__row'><span>👨‍👩‍👧‍👦</span>${(data.area / 1000000).toFixed(2)} млн</p>
            <p class='country__row'><span>🗣️</span>${languages}</p>
            <p class='country__row'><span>💰</span>${currencySymbol || ''} ${currencyName}</p>
          </div>
        </article>`;
  countries.insertAdjacentHTML('beforeend', html);
  countries.style.opacity = '1';


}

function getCountryData(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(response=>response.json()).then(data=>{
          displayCountries(...data);
          getNeighbor(...data)
          });
}

function getNeighbor(data){
    const fierstNeighbor = data.borders;
    if (!fierstNeighbor) return;
    fierstNeighbor.forEach(item => 
        fetch(`https://restcountries.com/v3.1/alpha/${item}`)
            .then(response=>response.json())
            .then(data=>displayCountries(...data, 'neighbour'))
    )
}