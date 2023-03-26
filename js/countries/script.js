'use strict';

const countries = document.querySelector('.countries');
const menuCountries = document.querySelector('.menu-countries');

let allCountries = [];


const listCountries = new XMLHttpRequest();
listCountries.open('GET', 'https://restcountries.com/v3.1/all');
listCountries.send();
listCountries.addEventListener('load', function() {
  allCountries = JSON.parse(listCountries.responseText);
  allCountries.forEach(countries => {
    const html = `<li class='countries-name'>${countries.name.common}</li>`;
    menuCountries.insertAdjacentHTML('beforeend', html);
  });
});

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
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request1.send();
  request1.addEventListener('load', function() {
    const [data1] = JSON.parse(this.responseText);
    displayCountries(data1);

    const fierstNeighbor = data1.borders;
    if (!fierstNeighbor) return;
    fierstNeighbor.forEach(item => {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${item}`);
      request2.send();
      request2.addEventListener('load', function() {
        const [data2] = JSON.parse(this.responseText);
        displayCountries(data2, 'neighbour');

      });
    });
  });
}


