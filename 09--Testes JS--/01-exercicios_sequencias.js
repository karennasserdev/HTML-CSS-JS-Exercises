/* 01 - Elaborar um algoritmo que efectue a leitura de dois valores numéricos reais e apresente o resultado da soma dos quadrados dos valores lidos*/

const somaQuadrados = (num1, num2) => {
    console.log(Math.pow(num1, 2) + Math.pow(num2, 2)); //Math.pow calcula exponencial
    console.log((num1 * num1) + (num2 * num2));
};

//somaQuadrados(3,4); // print 25

/* 02 - Elaborar um algoritmo que efectue e apresente o cálculo da área de um trapézio*/

const areaTrapezio = (b, bz, h) => {
    let a = (b + bz * h) / 2;
    console.log(a);
};

//areaTrapezio(30,20,10); / prints 115

/* 03 - Desenvolver um algoritmo que faça a leitura em graus Fahrenheit e a apresente convertida em graus Celsius. A fórmula de conversão é: C = (F-32)*(5/9) sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

const leituraCelsius = (fahrenheit) => {
    let celsius = Math.floor((fahrenheit - 32) * (5 / 9)); //Math.floor arredonda numero para menos
    console.log(celsius);
};

//leituraCelsius(250);

/* 04 - Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula VOLUME <- 3,14159 * R^2*ALTURA*/

let pi = 3.14159;

const volumeLata = (raio, h) => {
    let vol = Math.floor(pi * (raio * raio) * h);
    let vol2 = Math.floor(Math.PI * (raio * raio) * h); // Math.PI é um metodo que retorna o valor exato de pi
    console.log(vol, vol2);
};

//volumeLata(2,8);

/* 05 - Efectuar o cálculo da quantidade de litros de combustível gasta numa viagem, utilizando um automóvel que faz 12 km por litro. Para obter o cálculo, o utilizador deve fornecer o tempo gasto e a velocidade média durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTÂNCIA <- TEMPO * VELOCIDADE. Tendo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_GASTOS <- DISTÂNCIA / 12. O programa deve apresentar os valores da velocidade média, tempo gasto na viagem, a distância percorrida e a quantidade de litros utilizada na viagem.*/


let tempoGasto = 2;
let velocidadeMedia = 100;

const litros = () => {
    let distanciaPercorrida = tempoGasto * velocidadeMedia;
    console.log(distanciaPercorrida + " km");

    let litrosGastos = Math.floor(distanciaPercorrida / 12);
    console.log((litrosGastos + " litros"));
};

//litros();

/* 06 - Efectuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTAÇÃO <- VALOR + (VALOR * (TAXA/100)*TEMPO).*/


const prestacao = (a, t, tp) => {
    let p = a + (a * (t / 100) * tp);
    console.log('O valor da prestacao e de: ' + p + " euros.");
};

//prestacao(100, 20, 30);

/* 07 - Ler dois valores para as variáveis A e B, e efectuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados.*/

let a = 10;
let b = 5;

//console.log([a,b]=[b,a]);

const troca = () => {
    let temp = a;
    a = b;
    b = temp;
    console.log("a = " + a + ", b = " + b);
};

//troca();

/* 08 - Efectuar a leitura de um número inteiro e apresentar o resultado do quadrado desse número.*/

const numInteiro = () => {
    let num = 5;
    return num * num;
};

//console.log(numInteiro());

/* 09- Ler dois valores inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.*/

const quadradoDif = () => {
    let a = 5;
    let b = 10;
    let dif = b - a;
    return dif * dif;
};
//console.log(quadradoDif());

/* 10- Efectue a apresentação do valor da conversão em euros de um valor lido em dólares. O algoritmo deve solicitar o valor da cotação do dólar.*/

let mycotacao = 0.91;

const conversao = (cotacao) => {
    let dolar = 200;
    let euro = cotacao * dolar;
    console.log(`O valor de ${dolar} dolares convertido em euro eh de ${euro} euros`);
}
//conversao(mycotacao);

/* 11- Efectue a leitura de três valores (A, B e C) e apresentar como resultado final a soma dos quadrados dos três valores lidos.*/

let valueA = 10;
let valueB = 14;
let valueC = 20;

const somaQuadrados2 = (v1, v2, v3) => {
    let suma = v1 * v1;
    let sumb = v2 * v2;
    let sumc = v3 * v3;
    return suma + sumb + sumc;
}

//console.log(somaQuadrados2(valueA, valueB, valueC));

/* 12 -Efectue a leitura de três valores (A, B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.*/

let valorA = 10;
let valorB = 14;
let valorC = 20;

const quadradoDaSoma = (v1, v2, v3) => {
    let suma = v1 * v1;
    let sumb = v2 * v2;
    let sumc = v3 * v3;
    let sumg = suma + sumb + sumc;
    return sumg*sumg;
}

//console.log(quadradoDaSoma(valorA, valorB, valorC));
