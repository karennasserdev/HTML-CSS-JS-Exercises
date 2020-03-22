
let totalBalance = document.getElementById('balance');
let incomeValue = document.getElementById('money-plus');
let expenseValue = document.getElementById('money-minus');
let historyList = document.getElementById('list');
let buttonDelete = document.querySelector('.delete-btn');
let form = document.getElementById('form');
let textInput = document.getElementById('text');
let amountInput = document.getElementById('amount');
let buttonAddTr = document.querySelector('.btn');

let transactions = [];

let addToHistory;
let addxButton;
let income = 0;
let expense = 0;
let errorMessage;

// income expense 
const updateValues = () => {
    expense = 0;
    income = 0;

    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].amount < 0) {
            expense += transactions[i].amount;
            expenseValue.innerHTML = `${expense}€`;
        } else {
            income += transactions[i].amount;
            incomeValue.innerHTML = `+${income}€`;
        }

        let balance = income - (- expense);
        totalBalance.innerHTML = `${balance.toFixed(2)}€`;
    }
};

//adicionar ao History
const historyAddItems = () => {

    addToHistory = document.createElement('li');

    addxButton = document.createElement('button');
    addxButton.innerHTML = 'x';
    addxButton.classList.add("delete-btn");
    addxButton.addEventListener('click', deleteXButton);

    for (let i = 0; i < transactions.length; i++) {

        if (transactions[i].amount < 0) {
            addToHistory.classList.remove("plus");
            addToHistory.classList.add("minus");
        } else {
            addToHistory.classList.remove("minus");
            addToHistory.classList.add("plus");
        }

        addToHistory.innerHTML = `${transactions[i].text} <span> ${transactions[i].amount}`;

        historyList.appendChild(addToHistory);
        addToHistory.appendChild(addxButton);
    }
};

// ao clickar
function addTransaction(e) {
    event.preventDefault();


    if (validacaoForm()) {
        let transaction = {
            text: textInput.value,
            amount: +amountInput.value,
        }

        transactions.push(transaction);

        text.value = "";
        amount.value = "";

        historyAddItems();

        updateValues();
    }
};

//validar
const validacaoForm = () => {

    if (textInput.value.trim() == "" || !isNaN(textInput.value) || amountInput.value.trim() == "" || isNaN(amountInput.value)) {
        errorMessage = document.createElement('p');
        errorMessage.innerHTML = "The fields need to be filled!";
        form.appendChild(errorMessage);
        errorMessage.style.color = "red";
        errorMessage.setAttribute('id', 'errormessage');
        return false
    } else {
        if (errorMessage) {
            errorMessage.style.display = 'none';
        }
        return true
    }
};

// X button
function deleteXButton(e) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
};


function removeTransaction(event) {
    const id = event.target.dataset.amount;
    transactions = transactions.filter(transaction => transaction.amount != amount);

    init();
};

buttonAddTr.addEventListener('click', addTransaction);