/*
let div = document.createElement('div');
div.classList.add('wrapper');
document.body.append(div);
let h1 = document.createElement('h1');
h1.textContent = 'Hello'
document.body.insertAdjacentElement('afterbegin', h1);
let ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`;
div.innerHTML = ul;

let img = document.createElement('img')
img.src = 'https://placepic.ru/wp-content/uploads/2018/10/572143_main.jpg';
img.width = 240;
img.heigth = 240;
img.alt = 'imageses'
console.dir(img)
div.appendChild(img)

let elemHTML = `<div class = "pDiv"><p>p13323</p><p>p2523</p></div>`;

div.insertAdjacentHTML('afterbegin', elemHTML)
let pDIV = document.querySelector('.pDiv');
pDIV.children[1].classList.add('text')
pDIV.firstElementChild.remove()
let cars = document.createElement('div');
cars.classList.add('autos');
/!*<h2>${brand} ${year}</h2>
<p>Автомобиль ${brand} - ${year} года. Возраст авто - ${new Date().getFullYear() - year} лет</p></div>*!/

function generateAutoCard(brand, color, year) {
    return `<div class="autoCard">
             <h2>${brand} ${year}</h2>
<p>Автомобиль ${brand} - ${year} года. Возраст авто - ${new Date().getFullYear() - year} лет</p></div> `
}

let carslist = [
    {brend: 'Tesla', year: 2015, color: 'red'},
    {brend: 'Lexus', year: 2018, color: 'silver'},
    {brend: 'Nissan', year: 2011, color: 'red'}
];
console.log(carslist)
const carsHTML = carslist.map(()=>{
    return generateAutoCard(this.brend,this.color,this.year);
}).join('')

cars.innerHTML = carsHTML;
div.insertAdjacentHTML('afterbegin',cars.innerHTML);*/

/*
let conteiner = document.querySelector('.conteiner');

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(conteiner, data) {
}
*/

"use strict"
//угадай число попытка 1


/*
let btnCheck = document.querySelector('.check');
let score = Number(document.querySelector('.score').innerHTML);
let startGame = document.querySelector('.again');
let guessMessage = document.querySelector('.guess-message');
let question = document.querySelector('.question');
let randomNumber = Math.ceil(Math.random() * 20);
let highscore = document.querySelector('.highscore');
btnCheck.addEventListener('click', chekingValues);
let body = document.body;
console.log(guessMessage.innerHTML)
function chekingValues() {
    let inputUser = Number(document.querySelector('.number-input').value);
    console.log(randomNumber)
    if (!score) {
        guessMessage.innerHTML = 'Вы исчерпали попытки начните сначала';
        btnCheck.style.display = 'none'
        body.style.backgroundColor = 'red'
    }
    else if (inputUser === randomNumber) {
        document.body.style.backgroundColor = 'green'
        highscore.innerHTML = score;
        guessMessage.innerHTML = 'Очень хорошо';
        question.innerHTML = randomNumber;
        highscore.innerHTML = score
    }
    else if (inputUser > randomNumber) {
        guessMessage.innerHTML = "Ваше число больше"
        --score
        console.log(score)
    } else  {
        guessMessage.innerHTML = "Ваше число меньше"
        --score
        console.log(score)
    }
}

startGame.addEventListener('click', reset)

function reset() {
    btnCheck.style.display = 'block'
    body.style.backgroundColor = 'black'
    score = '20'
    guessMessage.innerHTML = "Начни угадывать"
    question.innerHTML = '???';
}*/

//угадай число попытка 2
let userInput = document.querySelector('.number-input');
let btnCheck = document.querySelector('.check');
let score = document.querySelector('.score');
let scoreNumber = 20;
let startGame = document.querySelector('.again');
let guessMessage = document.querySelector('.guess-message');
let question = document.querySelector('.question');
let randomNumber = Math.ceil(Math.random() * 100);
let highscore = document.querySelector('.highscore');
let body = document.body;

btnCheck.addEventListener('click', valueCheck);
function valueCheck() {
    let numberUser = Number(userInput.value);
    if (!numberUser) {
        guessMessage.innerHTML = 'Введите число больше 0';
        userInput.value = '';
    } else if (numberUser > randomNumber) {
        guessMessage.innerHTML = "Ваше число слишком большое"
        userInput.value = '';
        atempts()

    } else if (numberUser == randomNumber) {
        winner()
    } else guessMessage.innerHTML = "Ваше число слишком маленькое"
    atempts()
}
function atempts() {
    if (!scoreNumber) {
        guessMessage.innerHTML = "Колличество попыток закончилось начните снова";
        btnCheck.style.display = 'none'
    }
    score.innerHTML = --scoreNumber
}
function winner() {
    guessMessage.innerHTML = "Вы победили";
    body.style.backgroundColor = 'green';
    highscore.innerHTML = --scoreNumber;
    question.innerHTML = randomNumber;
    btnCheck.style.display = 'none'
}
startGame.addEventListener('click',resetGame)
function resetGame(){
    guessMessage.innerHTML = "Начни угадывать";
    body.style.backgroundColor = 'black';
    question.innerHTML = '???';
    userInput.value = '';
    score.innerHTML='20'
    btnCheck.style.display = 'block'
}


//вешаем события на кнопки
/*
let btn = document.querySelectorAll('.btn');

for (let element of btn) {
    element.addEventListener('click', function (event) {
        event.target.classList.toggle('active')})
}
*/

