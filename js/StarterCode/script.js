'use strict';
(function() {
  let button = document.querySelectorAll(`[class*='btn']`);
  for (const buttonElement of button) {
    buttonElement.setAttribute('type', 'button');
  }
})();
// Simply Bank App
const account1 = {
  userName: 'Cecil Ireland', transactions: [500, 250, -300, 5000, -850, -110, -170, 1100], interest: 1.5, pin: 1111
};
const account2 = {
  userName: 'Amani Salt', transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30], interest: 1.3, pin: 2222
};
const account3 = {
  userName: 'Corey Martinez', transactions: [900, -200, 280, 300, -200, 150, 1400, -400], interest: 0.8, pin: 3333
};
const account4 = {
  userName: 'Kamile Searle', transactions: [530, 1300, 500, 40, 190], interest: 1, pin: 4444
};
const account5 = {
  userName: 'Oliver Avila', transactions: [630, 800, 300, 50, 120], interest: 1.1, pin: 5555
};
const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//userName: 'Corey Martinez', transactions: [900, -200, 280, 300, -200, 150, 1400, -400], interest: 0.8, pin: 3333

btnLogin.addEventListener('click', LogIn);

function LogIn() {
  for (const account of accounts) {
    let nickName = account.userName.toLowerCase().split(' ').map(word => word[0]).join('')
    console.log(nickName);
    if ((account.userName === inputLoginUsername.value) || (inputLoginUsername.value === nickName)
      && account.pin === +inputLoginPin.value) {
      containerApp.style.opacity = '1';
      inputLoginUsername.value = account.userName;
     inputLoginUsername.classList.add('logined');
      inputLoginPin.value = '';
      inputLoginPin.remove();
      btnLogin.remove();
      addTransaction(account);
      getBalance(account);
    }
  }
}
//create function add element nickname in array

function addTransaction(account) {
  containerTransactions.innerHTML = '';
  account.transactions.forEach((transaction, index) => {
    const transType = transaction > 0 ? 'deposit' : 'withdrawal';
    const operationsName = transaction > 0 ? 'ДЕПОЗИТ' : 'ВЫВОД СРЕДСТВ';

    let row = `<div class='transactions__row'>
      <div class='transactions__type transactions__type--${transType}'>
      ${index + 1} ${operationsName}
      </div>
      <div class='transactions__date'>9 дней назад</div>
      <div class='transactions__value'>${transaction}$</div>
    </div>`;
    containerTransactions.insertAdjacentHTML('afterbegin', row);
  });

}

function getBalance(account) {
  labelBalance.innerHTML = account.transactions.reduce((acc,item)=>acc+item) + '$'
}

