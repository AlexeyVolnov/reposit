'use strict';

let btnNewGame = document.querySelector('.btn--new');
let img = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let allPlayers = document.querySelectorAll('[class^=\'player\']');
let btnHold = document.querySelector('.btn--hold');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
let scorePlayer0 = document.querySelector('#score--0');
let scorePlayer1 = document.querySelector('#score--1');
let dice = document.querySelector('.dice');

btnNewGame.addEventListener('click', resetResults);
dice.style.display = 'none';





function resetResults() {
  let curentLabelAll = document.querySelectorAll('.current-score');
  let scoreAll = document.querySelectorAll('.score');
  for (let i = 0; i < curentLabelAll.length; i++) {
    curentLabelAll[i].innerHTML = 0;
    scoreAll[i].innerHTML = 0;
  }
  img.setAttribute('src', 'images/dice1.png');


}

let activePlayer = 0;
let totalScores = [0, 0];

function classChange() {
  allPlayers[0].classList.toggle('player--active');
  allPlayers[1].classList.toggle('player--active');
}


/////////////
let currentScore = 0;
btnRoll.addEventListener('click', function() {
  dice.style.display = 'block';
  let randomNumber = Math.ceil(Math.random() * 6);
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    img.setAttribute('src', `images/dice${randomNumber}.png`);
    document.querySelector(`#current--${activePlayer}`).innerHTML = currentScore;
  } else if (randomNumber === 1) {
    document.querySelector(`#current--${activePlayer}`).innerHTML = '0';
    activePlayer = (activePlayer === 0) ? 1 : 0;
    currentScore = 0;
    classChange();
  }
  btnHold.addEventListener('click', function() {
    document.querySelector(`#score--${activePlayer}`).innerHTML = currentScore
    activePlayer
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).innerHTML = '0'
    classChange()
  });


});
