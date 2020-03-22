/* 24 - Cálculo do factorial de 5 usando o ciclo "enquanto". */

let contador1 = 1;
let factorial1 = 1;

const calculo1 = () => {
    while (contador1 <= 5) {
        factorial1 *= contador1;
        contador1 += 1;
    };
};
//calculo1();
//console.log(`Factorial de 5 é igual a ${factorial1}`);

/* 25 -  Cálculo do factorial de 5 usando o ciclo "repetir".*/

let contador2 = 1;
let factorial2 = 1;

const calculo2 = () => {
    do {
        factorial2 *= contador2;
        contador2 += 1;
    } while (contador2 <= 5);
    return `Factorial de 5 é igual a ${factorial2}`;
};

//console.log(calculo2());

/* 26 - Cálculo do factorial de 5 usando o ciclo "para".*/

let factorial3 = 1;

const calculo3 = () => {

    for (let i = 1; i <= 5; i++) {
        factorial3 *= i;
    }
    return factorial3;
};

//console.log(calculo3());

/* 27 - Calculo do factorial de um númro qualquer entrado pelo utilizador. O algoritmo deverá também ter a capacidade de continuar a calcular factoriais até que o utilizador não deseje mais usar o programa, devendo assim pedir ao utilizador a sua continuidade ou não. */


let factorial4;
let resp = "S";


const calculo4 = () => {

    while (resp == "S") {
        factorial4 = 1;

        let n = prompt("Factorial de que número ?");

        for (let i = 1; i <= n; i++) {
            factorial4 *= i;
        }

        console.log(`Factorial de ${n} eh = ${factorial4}`);
        resp = prompt("Deseja Continuar ? (S/N)");

    }

};

//calculo4();



/* 28 - Resolver de novo o problema 32 usando o ciclo "repetir"' */

let factorial5;
let resposta = "S";


const calculo5 = () => {


    do {
        factorial5 = 1;

        let n = prompt("Factorial de que número ?");

        if (isNaN(n)) {
            alert("Not a valid input");

        } else if (n < 0) {
            alert("Has to be a positive number.");
        } else {

            for (let i = 1; i <= n; i++) {
                factorial5 *= i;
            }

            console.log(`Factorial de ${n} eh = ${factorial5}`);
            resposta = prompt("Deseja Continuar ? (S/N)");
        }



    } while (resposta == "S" || resposta == "s");

};


//calculo5();

/* 29 - Apresentar os quadrados dos números inteiros de 15 a 200 */

const quadradosInteiros = () => {

    for (let i = 15; i <= 200; i++) {
        console.log(i * i);
    }
};
//quadradosInteiros();

/* 30 - Apresentar os resultados de uma tabuada de um número qualquer */

const tabuada = (n) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
};

//tabuada (5);

/* 31 - Apresentar o total da soma obtida dos cem primeiros números inteiros
(1+2+3+4+5+......98+99+100). */

const somaTotal = () => {

    let a = 0;

    for (let i = 1; i <= 100; i++) {
        a += i;
    }

    console.log(a);
};

//somaTotal();

/* 32 - Cálculo do somatório dos valores pares existentes na faixa de 1 a 500.*/

const somaPares = () => {

    let b = 0;

    for (let i = 1; i <= 500; i++) {

        if (i % 2 == 0) {
            b += i;
        }
    }

    console.log(b);


};

//somaPares();

/* 33 - Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efectuar dentro da
malha a verificação lógica desta condição com a instrução "se", perguntando se o número é ímpar; sendo, mostre-o; não sendo, siga para o passo seguinte.*/

const valorImpar = () => {

    for (let i = 0; i <= 20; i++) {

        if (i % 2 != 0) {
            console.log(i);
        }
    }

};
//valorImpar();

/* 34 - Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o número é divisível por 4, efectuar dentro da malha a verificação lógica desta condição com a instrução "se" perguntando se o número é divisível; sendo, mostre-o; não sendo, vá para o próximo passo. A variável que controlará o contador deve ser iniciada com valor 1. */

const divisiveis = () => {


    for (let i = 1; i < 200; i++) {

        if (i % 4 == 0) {
            console.log(i);
        }
    }

};

//divisiveis();

/* 35 - Apresentar as potências de 3, variando de 0 a 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. */

const potencias = () => {
    let n = 3;

    for (let i = 0; i <= 15; i++) {

        if (i == 0) {
            n = 1;
        } else if (i == 1) {
            n = 3;
        } else {
            n = n * 3;
        }

        console.log(n);
    }

};

//potencias();

/* 36 - Cálculo da série de Fibonacci até ao décimo quinto termo. A série de Fibonacci é formada pela sequência : 1, 1, 2, 3, 5, 8, 13, 21, 34, ... etc. Esta série caracteriza-se pela soma de um termo posterior com o seu anterior subsequente. */

const fibonacci = () => {
    let numA = 1;
    let numB = 0;
    let num = 1;

    for (let i = 1; i <= 15; i++) {

        console.log(num);
        num = numA + numB;
        numB = numA;
        numA = num
        
    }
};

//fibonacci();

/* 37 - Efectuar a leitura de 15 valores numéricos inteiros e no final apresentar
o somatório do factorial de cada valor lido.*/

let factorial6 = 1;
let zero = 0;
let sum = 0;

const calculo6 = () => {

    for (let i = 1; i <= 15; i++) {
        factorial6 *= i;

        sum += factorial6;
    }

    console.log(sum);
};

//calculo6();