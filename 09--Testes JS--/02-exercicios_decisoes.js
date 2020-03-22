/* 13 - Ler dois valores numéricos e apresentar a diferença do maior pelo menor*/

let val1 = 5;
let val2 = 3;

const diferenca = (num1, num2) => {

    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    };
    // return Math.abs(num1-num2);  --- Math.abs remove o numero negativo
}
//console.log(diferenca(val1,val2));

/* 14 - Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição*/

let notaA = 7;
let notaB = 10;
let notaC = 8;
let notaD = 7;

const media = (nota1, nota2, nota3, nota4) => {

    let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

    if (mediaFinal >= 5) {
        return `Congrats, your final grade is ${mediaFinal}, you're aproved!`;
    } else {
        return `Your final grade is ${mediaFinal}, you're not aproved.`; //usei paramentros entao preciso retornar o valor pra eles.
    };

}

//console.log(media(notaA,notaB,notaC,notaD));

/* 15 - Ler dois valores referentes a duas notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter uma nova média. Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar com as mensagens o valor da média do aluno para qualquer condição */

const mediaAulno = (nota1, nota2, exame) => {

    let mediaAluno = (nota1 + nota2) / 2
    let novaMedia = (mediaAluno + exame) / 2;

    if (mediaAluno >= 7) {
        return `Congrats, your final grade is ${mediaAluno}, you're aproved!`;
    } else {
        if (novaMedia >= 5) {
            return `Congrats, your final grade is ${novaMedia}, you're aproved!`;
        } else {
            return `Your final grade is ${novaMedia}, you're not aproved.`;
        }
    }
};
//console.log(mediaAulno(2, 5, 5));


/* 16 - Efectuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente */

const numOrder = (numA, numB, numC) => {

    if (numA < numB) {

        if (numB < numC) {
            return numA + " " + numB + " " + numC;
        } else if (numA < numC) {
            return (numA + " " + numC + " " + numB);
        } else {
            return (numC + " " + numA + " " + numB);
        }

    } else if (numB < numC) {

        if (numA < numC) {
            return (numB + " " + numA + " " + numC);
        } else {
            return (numB + " " + numC + " " + numA);
        }

    } else {
        return (numC + " " + numB + " " + numA);
    }
};

//console.log(numOrder(18, 35, 6)); 

/* 17 - Efectuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3 */

let numbers = [10, 30, 80, 60];

const divisible = () => {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 == 0 && numbers[i] % 3 == 0) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
};

//console.log(divisible());

/* 18/19 -  Efectuar a leitura de cinco números inteiros e identificar o maior e o menor dos valores. Não executar a ordenação dos valores.*/

let numbers5 = [35, 40, 60, 75, 90];

const ident = () => {
    let maior = numbers5[0];
    let menor = numbers5[0];

    for (let i = 0; i < numbers5.length; i++) {

        if (maior < numbers5[i]) {
            maior = numbers5[i];
        }

        if (menor > numbers5[i]) {
            menor = numbers5[i];
        }

    }
    return maior + " " + menor;
}

//console.log(ident());

/* 20 - Efectuar a leitura de um número inteiro e apresentar uma mensagem informando se o número é par ou ímpar. */


const inteiro = (i) => {
    let integer = i % 2;

    if (integer == 0) {
        return "par";
    } else {
        return "impar";
    }
};

//console.log(inteiro(5));

/* 21 - Efectuar a leitura de um valor que esteja entre a faixa de 1 a 9. Após a leitura do valor fornecido pelo utilizador, o algoritmo deve indicar uma de duas mensagens: “O valor está na faixa permitida”, caso o utilizador forneça o valor nesta faixa, ou a mensagem “O valor está fora da faixa permitida”, caso o utilizador forneça valores menores que 1 ou menores que 9 */

const random = (numberx) => {

    if (numberx < 1 || numberx > 9) {
        return "O valor está fora da faixa permitida";
    } else {
        return "O valor está na faixa permitida";
    }
}

//console.log (random(50));

/* 22 - Efectuar a leitura de um determinado valor e apresentá-lo caso não seja maior que três */

const valor = (x) => {

    if (x <= 3){ 
        console.log(x);
    }
}

//valor(2);

/* 23 - Efectuar a leitura do nome e do sexo de uma pessoa, apresentando como saída uma das seguintes mensagens: “Exmo.Sr.” para o sexo in formado como masculino, ou a mensagem “Exma.Sra.”, para o sexo informado como feminino. Apresentar também debaixo da mensagem impressa o nome da pessoa. */


const nameGender = (gender, name) => {

    if (gender == "male"){
        return `Exmo.Sr. ${name}`
    } else {
        return `Exma.Sra. ${name}`
    }
}

//console.log(nameGender("female","Karen"));

