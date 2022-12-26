'use strict';

/*
 let user = {
 firstName : 'alex',
 birthday : 1995,
 griting(){
 console.log(`Hello i'm ${this.firstName}`);
 },
 winner(){
 console.log(`i winn i mne ${this.age} years`);
 },
 getAge(){

 let tempAge = new Date().getFullYear() - this.birthday
 let isAdult = ()=>{
 (tempAge > 18)?this.isAdult = true:this.isAdult = false
 }
 this.age = tempAge
 isAdult()
 }
 }
 user.griting()
 user.winner()
 user.getAge()
 console.log(user);*/


////день недели по дате
/*
 let date = new Date();
 console.log(date);

 function getWeekDay(date) {
 let dayArray = ['вс','пн','вт','ср','чт','пт','сб'];
 console.log(dayArray[date.getDay()]);
 }

 getWeekDay(date);


 */


let day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const japaneseRestaurant = {
  name        : 'Banzai',
  location    : '108 Markham Woods Rd, Longwood, USA',
  categories  : ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers  : ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu    : ['Sushi', 'Ramen', 'Tempura'],
  workingHours: {
    [day[0]]: {
      open : 0,
      close: '23.00'
    },
    [day[1]]: {
      open : '10.00',
      close: '24.00'
    },
    [day[2]]: {
      open : '13.00',
      close: '17.00'
    }
  },
  orderFud(categoriesIndex, menuIndex) {
    return [this.categories[categoriesIndex], this.mainMenu[menuIndex]];
  },
  orderSusi(ing1, ing2, ing3) {
    console.log(`You have ordered sushi ${ing1},${ing2},${ing3}`);

  },
  orderRamen(noodle, ...otherIngs) {
    console.log(noodle);
    console.log(otherIngs);
  }
};


let posts = [
  {
    name: 'js is cool',
    user: 'Alex'
  },
  {
    name: 'js is shit',
    user: 'Jack'
  }
];


let workingHours = {
  [day[0]]: {
    open : 0,
    close: '23.00'
  },
  [day[1]]: {
    open : '10.00',
    close: '24.00'
  },
  [day[2]]: {
    open : '13.00',
    close: '17.00'
  }
};
/*
 let props = Object.entries(japaneseRestaurant.workingHours);
 console.log(props);
 for (let [day,{open,close}] of props) {
 console.log(day);
 console.log(`At ${day} restoran open ${open}, close ${close}`);
 }
 */

const game = {
  team1  : 'REAL MADRID',
  team2  : 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema'
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele'
    ]
  ],
  score  : '2:1',
  scored : ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
  date   : 'Apr 10th, 2021',
  odds   : {
    team1: 1.48,
    draw : 2.53,
    team2: 4.25
  }

};

let getTextConvert = document.querySelector('.textConvert');
let textarea = document.createElement('textarea');
let button = document.createElement('button');
getTextConvert.appendChild(textarea);
getTextConvert.appendChild(button);

button.addEventListener('click', () => {
  let inputUser = textarea.value;
  convertUpperCase(inputUser);
  textarea.value = '';
});

function convertUpperCase(input) {
  let arrInput = input.split('\n');
  for (let inpElem of arrInput) {
    let lowerStr = inpElem.toLowerCase().trim();
    let index = lowerStr.indexOf('_') + 1;
    let str1 = lowerStr.slice(0, index);
    let str2 = lowerStr.slice(index);
    let str3 = str2.replace(str2[0], str2[0].toUpperCase());
    let result = str1.concat(str3.trim());
    //console.log(result);
  }
}

const ObjSet = new Set(['Game', 'Game', 'Warning', 'Error', 'English', 'Game', 'Game', 'Trust', 'English', 'Russian', 'Chinese']);
ObjSet.forEach((value, index) => {
  // console.log(index, value);
});

const currencies = new Map([
                             ['USD', 'United States dollar'],
                             ['EUR', 'Euro'],
                             ['CNY', 'Chinese yuan']
                           ]);


/*

 for (const [i,transaction] of transactions.entries()) {
 transaction > 0
 ? console.log(`${i+1}. ${transaction} was deposited`)
 : console.log(`${i+1}. ${transaction} was withdrew`);
 }
 console.log('');

 */

/*

 transactions.forEach((transaction,index) => {
 transaction > 0
 ? console.log(`${index + 1}. ${transaction} was deposited`)
 : console.log(`${index + 1}. ${Math.abs(transaction)} was withdrew`)
 });

 */

currencies.forEach((value, index) => {
  //console.log(index, value);
});
let message = ['hello', 'europa', 'bussines', 'Nikki Willes', 'Barak Obama', 'Treisy Williams', 'Luk Skyoker'];
let temp = new Map([['hello', 'GoodBye'], ['fierstName', 'lastName']]);
temp.forEach(((value, index) => {
  // console.log(index, value);
}));
let person = {
  fierstName: 'Alex',
  lastName  : 'Black',
  getAge() {
    const getDate = new Date().getFullYear();
    this.age = getDate - this.birthday;
  },
  birthday: 1995,
  gender  : 'male',
  family  : [['closeRelatives'], ['distantRelatives']]
};
person.getAge();
//console.log(person);
const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

function verifyCats(catsJane, catsJulia) {
  const catsJaneCorrect = catsJane.slice(1, length - 1);
  const cats = catsJaneCorrect.concat(catsJulia);
  cats.forEach(((cat, index) => {
    console.log(
      `Кошка № ${index + 1} ${cat >= 2
        ? `взрослая, ей ${cat} лет`
        : `еще котенок`}`);
  }));

}

verifyCats(catsJane, catsJulia);

const transactions = [-300, 500, 9000, -600, 760, 432, 6823, -1222];


const balance = transactions.reduce((acc, item) => acc + item);
const min = transactions.reduce((acc, item) => acc > item ? item : acc);

console.log(min);