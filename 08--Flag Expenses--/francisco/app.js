const balance = document.querySelector('#balance');
const moneyIncome = document.querySelector('#money-plus');
const moneyExpense = document.querySelector('#money-minus');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const text = document.querySelector('#text');

let errorMessage;



//para guardar no localStorage
let transactions = localStorage.getItem('transactions') !== null ? JSON.parse(localStorage.getItem('transactions')) : [];
//Mesma coisa de:
/*function getTransactions() {
    if ( localStorage.getItem('transactions') !== null) {
        return JSON.parse(localStorage.getItem('transactions'));
    }
    return [];
}*/

//gerar um id em sequencia para cada item adicionado, para depois com o target, poder atualizar o valor quando o elemento foi retirado do history.
function generateId() {
    //return Math.round(Math.random() * 100000); - criar ids random

    //criar id sequnciais
    const length = transactions.length;
    return length === 0 ? 1 : transactions[length - 1].id + 1;
    //mesma coisa de:
    /*if (length === 0) {
        return 1;
    } else {
        const lastTransaction = transactions[length - 1];
        return lastTransaction.id + 1;
    }*/
};

//adiciona as transactions (e validacao dos inputs)
function addTransaction(event) {
    //nao atualizar a pagina quando enviar formulario
    event.preventDefault();

    //se texto for string vazia/ numero ou se o valor for string vazia ou nao numero
    if (text.value.trim() === '' || !isNaN(text.value) || amount.value.trim() === '' || isNaN(amount.value)) {
        errorMessage = document.createElement('p');
        errorMessage.innerHTML = "The fields need to be filled!";
        form.appendChild(errorMessage);
        errorMessage.style.color = "red";
        errorMessage.setAttribute('id', 'errormessage');
    } else {
        //criar objeto com um id, valor de texto e amount, pois quando dar o push para uma string vai como um "bloco". Ex: index 0 = id, text e amount value.
        const transaction = {
            id: generateId(),
            text: text.value,
            amount: +amount.value
        };
        //fazer o push numa string vazia
        transactions.push(transaction);
        //atulizar os valores
        updateValues();
        //adicionar as transacoes ao dom
        addTransactionToDOM(transaction);
        //limpar a mengagem de erro
        errorMessage.style.display = 'none';
        // quando adicionado, zerar os inputs
        text.value = '';
        amount.value = '';

    }
};

//adicionar as transactions ao DOM
function addTransactionToDOM(transaction) {

    // se o amount for menor que zero adicionar a classe minus, se for maior adicionar a classe plus
    const sign = transaction.amount < 0 ? 'minus' : 'plus';

    //criar um li e adicionar a transaction la
    const item = document.createElement('li');
    item.classList.add(sign);
    item.innerHTML = `${transaction.text} <span> ${transaction.amount}€`;

    //criar o botao de remover elemento do history
    const removeButton = document.createElement('button');
    removeButton.classList.add('delete-btn');
    removeButton.textContent = 'x';
    //permite acesso a todos os ids de transaction 
    removeButton.dataset.id = transaction.id;
    //ao clickar, remover o botao e executao o removeTransaction
    removeButton.addEventListener('click', removeTransaction);

    item.appendChild(removeButton);

    list.appendChild(item);
};

//remover os targets ao selecionar
function removeTransaction(event) {
    //pegar o id target e filtrar as transactions que nao possuem mais aquele id (que foram removidas)
    const id = event.target.dataset.id;
    transactions = transactions.filter(transaction => transaction.id != id);
    //executar o init
    init();
};

//update nos valores
function updateValues() {
    //devolve para amounts um novo array com as transactions
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        //filtrar os itens maiores que 0
        .filter(item => item > 0)
        //para cada item ele soma ac = ac+item
        .reduce((ac, item) => ac + item, 0)
        // adicionar duas casas decimais
        .toFixed(2);

    const expense = amounts
        //filtrar os itens menores que 0
        .filter(item => item < 0)
        //.reduce((ac, item) => ac + (item * -1), 0)
        .reduce((ac, item) => ac + item, 0)
        // adicionar duas casas decimais
        .toFixed(2);

    /*let expense = 0;
    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] < 0) {
            expense += amounts[i];
        }
    }*/

    moneyIncome.textContent = `${income}€`;
    moneyExpense.textContent = `${expense}€`;
    balance.textContent = `${income - Math.abs(expense)}€`;
    //ou income - (- expense)

    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

//resetar os elementos
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionToDOM);
    updateValues();
}

init();
form.addEventListener('submit', addTransaction);