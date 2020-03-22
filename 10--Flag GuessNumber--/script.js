const randomNumber = () => {
    return Math.ceil(Math.random() * 100); //Math.floor gera um numero de 0 a 99 (arredonda pra menos)
};

let btn = document.getElementById("button");
let btnNewGame = document.getElementById("newgame");
let userInput = document.getElementById("user-input");
let userTip = document.getElementById("tip");
let numerosInput = document.getElementById("numUsados");
let timeLeft = document.getElementById("timeleft");
let numAttempts = document.getElementById("numero-tentativas");
let results = document.getElementById("result");


let arrayInput = [];

let timer;

let guardarNumeros;
let computerNumber = randomNumber();
console.log(computerNumber);

let tentativas = 0;


const okButn = () => {
    let input = userInput.value;
    guardarNumeros = input;
    arrayInput.push(input);

    console.log(arrayInput);

    compareNumbers();
    numTentativas();

    arrayHTML();
};

const arrayHTML = () => {

    for (var i = 0; i < arrayInput.length; i++) {
        numerosInput.textContent = `Your numbers guessed: ${arrayInput}`;
    }

};

const compareNumbers = () => {

    tentativas++;
    arrayHTML();

    if (isNaN(guardarNumeros) || guardarNumeros < 0 || guardarNumeros > 100) {
        alert("Invalid number!");
        return;
    }

    if (guardarNumeros == computerNumber) {
        userTip.textContent = "You're sunshine!";
        endGame(true);

    } else if (guardarNumeros < computerNumber) {
        userTip.innerHTML = `No! you have ${10 - tentativas} attempts. <br><br> :( Try a bigger number.`;

        btnNewGame.style.visibility = 'hidden';
    } else {
        userTip.innerHTML = `No! you have ${10 - tentativas} attempts. <br><br>  :( Try a smaller number.`;
        btnNewGame.style.visibility = 'hidden';
    };

};

const numTentativas = () => {

    if (tentativas == 10) {
        numAttempts.textContent = " Maximum number of attempts reached.";
        btn.style.visibility = "hidden";
        endGame(false);
    } else {};
};

const endGame = hasWon => {
    clearInterval(timer);

    if (hasWon) {
        results.textContent = `You've won with ${tentativas} attempts!`;
        numAttempts.textContent = "";
        btnNewGame.style.visibility = "visible";
        btn.style.visibility = "hidden";

    } else {
        results.textContent = `You lost, the number was ${computerNumber}.`;
        userTip.textContent = "";
        btnNewGame.style.visibility = "visible";
        numAttempts.textContent = `You're out of attempts!`;

    };

    tentativas = 0;
    computerNumber = randomNumber();
};


const startGame = () => {

    startTimer();

    computerNumber = randomNumber();
    console.log(computerNumber);


    tentativas = 0;
    arrayInput = [];
    numerosInput.textContent = "";

    btn.style.visibility = "visible";
    btnNewGame.style.visibility = "hidden";


    userInput.value = 0;

    userTip.textContent = "";
    results.textContent = "";
    numAttempts.textContent = "";
};

const startTimer = () => {
    let time = 60;

    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft.textContent = `Time left: ${--time} seconds`;

        if (time < 10) {
            timeLeft.style.color = 'red';
        }

        if (time <= 0) {
            endGame(false);
        }
    }, 1000);
};

btn.addEventListener("click", okButn);
btnNewGame.addEventListener("click", startGame);