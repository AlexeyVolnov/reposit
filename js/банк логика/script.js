'use strict';
(function() {
  let button = document.querySelectorAll(`[class*='btn']`);
  for (const buttonElement of button) {
    buttonElement.setAttribute('type', 'button');
  }
})();
// Simply Bank App
const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-10-09T07:43:59.331Z',
    '2021-10-11T15:21:20.814Z'
  ],
  currency: 'USD',
  locale: 'en-US'
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z'
  ],
  currency: 'UAH',
  locale: 'uk-UA'
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z'
  ],
  currency: 'RUB',
  locale: 'ru-RU'
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z'
  ],
  // currency: 'CAD',
  currency: 'CAD',
  locale: 'fr-CA'
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z'
  ],
  currency: 'USD',
  locale: 'en-US'
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const logoCard = document.querySelector('.logo');
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

const formLogin = document.querySelector('.login');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const optionsDate = {
  hour: 'numeric',
  minute: 'numeric',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  weekday: 'long'
};

let logined = '';
let sorted = true;
let cardActive = true;
btnLogin.addEventListener('click' || 'key:enter', LogIn);
btnTransfer.addEventListener('click', transferMoney);
btnClose.addEventListener('click', CloseAnAccount);
btnLoan.addEventListener('click', loanRequest);
btnSort.addEventListener('click', () => {
  addTransaction(logined, sorted);
  sorted = !sorted;
});


(function(array) {
  // create nickNames for all accounts
  array.forEach(account => {
      account.nickName = account.userName
        .toLowerCase()
        .split(' ')
        .map(word => word[0])
        .join('');
    }
  );
})(accounts);

function LogIn() {
  let account = accounts.find(account => {
    return (inputLoginUsername.value === account.userName || inputLoginUsername.value === account.nickName)
      &&
      +inputLoginPin.value === account.pin;
  }) || account3;
  if (account) {
    logined = account;
    welcomeUser(account);
    addTransaction(account);
    displayTotal(account);
    timeOutApp();
  }
}

function timeOutApp() {
  let time = 1800;
  const LogOutTimer = setInterval(() => {
    const minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    labelTimer.innerHTML = `Выход из приложения через ${minutes}:${seconds}`;
    if (time === 0) {

      location.reload();
    }

    time--;
  }, 1000);
}

function welcomeUser(account) {
  containerApp.style.opacity = '1';
  labelWelcome.classList.add('welcomeUser');
  formLogin.style.display = 'none';
  labelWelcome.textContent = `Welcome ${account.userName}`;
}

function addTransaction(account, sort = false) {
  containerTransactions.innerHTML = '';
  const trans = sort ? account.transactions.slice().sort((x, y) => x - y) : account.transactions;
  labelDate.innerHTML = new Intl.DateTimeFormat(account.locale || navigator.language, optionsDate).format(new Date());
  trans.forEach((transaction, index) => {
    let date = new Date(account.transactionsDates[index]);
    const dateDifference = new Date().getDate() - date.getDate();
    const transType = transaction > 0 ? 'deposit' : 'withdrawal';
    const operationsName = transaction > 0 ? 'ДЕПОЗИТ' : 'ВЫВОД СРЕДСТВ';

    let row = `<div class='transactions__row'>
      <div class='transactions__type transactions__type--${transType}'>
      ${index + 1} ${operationsName}
      </div>
      
      <div class='transactions__date'>${
      dateDifference === 0
        ? `Сегодня в  + ${new Intl.DateTimeFormat(account.locale || navigator.language, {
          hour: 'numeric',
          minute: 'numeric'
        }).format(date)}`
        : new Intl.DateTimeFormat(account.locale || navigator.language, optionsDate).format(date)}</div>
      
      <div class='transactions__value'>${new Intl.NumberFormat(account.locale, {style: 'currency',currency: account.currency}).format(transaction)}</div>
    </div>`;
    containerTransactions.insertAdjacentHTML('afterbegin', row);
  });
}

function updateUI(account) {
  addTransaction(account);
  displayTotal(account);
}

function displayTotal(account) {
  function currencyFormat(formatted) {
    return new Intl.NumberFormat(account.locale, { style: 'currency', currency: account.currency }).format(formatted);
  }

  labelBalance.innerHTML = currencyFormat(account.transactions.reduce((acc, trans) => acc + trans));
  labelSumIn.innerHTML = currencyFormat(account.transactions.filter(trans => trans > 0).reduce((acc, trans) => acc + trans));
  labelSumInterest.innerHTML = currencyFormat(account.transactions.filter(trans => trans > 0).map(depos => (depos * account.interest) / 100).filter(item => item > 5).reduce((acc, depos) => acc + depos));
  labelSumOut.innerHTML = currencyFormat(account.transactions.filter(trans => trans < 0).reduce((acc, trans) => acc + trans));
}

function transferMoney() {

  const recipient = accounts.find(account => account.nickName === inputTransferTo.value || account.userName === inputTransferTo.value);
  const sender = logined;
  const senderBalance = sender.transactions.reduce((acc, trans) => acc + trans);
  const transferSum = +inputTransferAmount.value;

  if (senderBalance >= transferSum
    && transferSum > 0
    && recipient !== sender
    && recipient) {
    sender?.transactions.push(-transferSum);
    recipient?.transactions.push(transferSum);
    [sender, recipient].forEach(i => i.transactionsDates.push(new Date().toISOString()));

    updateUI(sender);
  } else {
    inputTransferTo.value = '';
    inputTransferAmount.value = '';
  }
}

function CloseAnAccount() {
  const index = accounts.findIndex(account => account === logined);
  if (inputCloseUsername.value === accounts[index]?.nickName && +inputClosePin?.value === accounts[index]?.pin) {
    accounts.splice(index, 1);
    containerApp.style.opacity = '0';
    labelWelcome.classList.remove('welcomeUser');
    formLogin.style.display = 'block';
    labelWelcome.textContent = `Войдите в свой аккаунт`;
  }
}

function loanRequest() {
  const MaxLoanAmount = +inputLoanAmount.value * 10 / 100;
  // можно реализовать через метод math.max()
  /*const maxTransactions = Math.max(...logined.transactions);
  if (MaxLoanAmount < maxTransactions) {
    logined.transactions.push(+inputLoanAmount.value);
    updateUI(logined);
  } else {
    console.log('запрашиваемая сумма слишком велика');
  }*/

  const maxTransactions = logined.transactions.some(trans => trans > MaxLoanAmount);
  if (maxTransactions) {
    logined.transactions.push(Math.round(inputLoanAmount.value));
    logined.transactionsDates.push(new Date().toISOString());
    updateUI(logined);
    inputLoanAmount.value = '';
  } else {
    console.log('запрашиваемая сумма слишком велика');
  }
}

logoCard.addEventListener('click', function() {
  let arr = [...document.querySelectorAll('.transactions__row')];
  arr.forEach((row, index) => row.style.backgroundColor = `${(index % 2 && cardActive) ? 'rgba(156,168,203,0.54)' : 'white'}`);
  cardActive = !cardActive;
});


