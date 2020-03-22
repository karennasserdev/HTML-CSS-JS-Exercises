/* 38 - Ler 10 elementos de um vector e apresentá-los. */

let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const funcao1 = () => {

    for (let i = 0; i < array1.length; i++) {

        console.log(a1[i]);

    }
};
//funcao1();

/* 39 - Ler os 8 elementos de um vector A. Construír um Vector B da mesma dimensão com os elementos do vector A multiplicados por 3. O elemento B[1] deve ser implicado pelo elemento A[1]*3, o elemento B[2] implicado pelo elemento A[2]*3 e assim por diante até 8. Apresentar o vector B.*/

let a2 = [1, 2, 3, 4, 5, 6, 7, 8];
let b2 = [];

const funcao2 = () => {

    for (let i = 0; i < a2.length; i++) {
        b2.push(a2[i] * 3);
    }

    console.log(b2);
};

//funcao2();

/* 40 - Ler dois vectores A e B com 20 elementos. Construír um vector C, em que cada elemento de C deve ser a subtracção do elemento correspondente de A com B. Apresentar o vector C.*/

let a3 = [];
let b3 = [];
let c3 = [];

const funcao3 = () => {

    for (let i = 1; i <= 20; i++) {
        let random = Math.ceil(Math.random(1) * 100);

        if (i <= 20) {
            a3.push(random);
        } else {
            b3.push(random);
            c3.push(a3[i - 21] - b3[i - 21]);
        }
    }

    console.log(a3);
    console.log(b3);
    console.log(c3);
};

//funcao3();

/*41 - Ler 15 elementos de um vector A. Construír um vector B do mesmo tipo, observando a seguinte lei de formação: Todo o elemento de B deve ser o quadrado do elemento de A correspondente. Apresentar os vectores A e B. */


let a4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let b4 = [];

const funcao4 = () => {
    console.log(a4);
    console.log(b4);


    for (let i = 0; i < 15; i++) {
        b4.push(a4[i] * a4[i]);
    }

    console.log(b4);
}


//funcao4();

/*  42 - Ler 15 elementos de um vector A. Construír um vector B do mesmo tipo, observando a seguinte lei de formação: Todo o elemento de B deve ser o factorial do elemento de A correspondente. Apresentar os vectores A e B.  */
//REVER

let a5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let b5 = [];

const funcao5 = () => {

    for (let i = 0; i < 15; i++) {

        b5.push(i);

        console.log(a5[i] *= b5[i]);

    }
}


//funcao5();

/* 43 - Ler dois vectores A e B com 15 elementos cada. Construír um vector C, sendo este a junção dos dois outros vectores. Desta forma, C deve ter o dobro de elementos, ou seja, 30. Apresentar o vector C. */

let a6 = [];
let b6 = [];
let c6 = [];

const funcao6 = () => {

    for (let i = 1; i <= 15; i++) {
        let randomA = Math.ceil(Math.random(1) * 15);
        let randomB = Math.ceil(Math.random(1) * 15);

        a6.push(randomA);
        b6.push(randomB);

        c6 = a6.concat(b6);
    }

    console.log(c6.length);
    console.log(c6);
};

//funcao6();

/* 44 - Ler dois vectores, sendo A com 20 elementos e B com 30 elementos. Construír um vector C, sendo este a junção dos dois outros vectores. Desta forma, C deve ter a capacidade de armazenar 50 elementos. Apresentar o vector C. */
//REVER
let a7 = [];
let b7 = [];
let c7 = [];

const funcao7 = () => {

    for (let i = 1; i <= 50; i++) {
        let randomC = Math.ceil(Math.random(1) * 50);

        if (i <= 20) {
            a7.push(randomC);
        } else {
            b7.push(randomC);
        }
    }

    c7 = a7.concat(b7);
    console.log(c7);

};

//funcao7();

/* 45 - Ler os 20 elementos de um vector A e construir um vector B da mesma
dimensão com os mesmos elementos do vector A, os quais devem estar
invertidos. Ou seja, o primeiro elemento de A passa a ser o último de B,
o segundo elemento de A passa a ser o penúltimo de B e assim por
diante. Apresentar os vectores A e B. */

let a8 = [];
let b8 = [];
let c8 = [];

const funcao8 = () => {

    for (let i = 1; i <= 20; i++) {
        let randomD = Math.ceil(Math.random() * 20);
        a8.push(randomD);
    }

    b8 = a8.slice(0, 20);
    b8.reverse();

    console.log(a8);
    console.log(b8);
};

//funcao8();

/* 46 - Ler três vectores (A, B e C) com 5 elementos cada. Construír um vector D, sendo este a junção dos três outros vectores. Desta forma D deve ter o triplo de elementos, ou seja, 15. Apresentar os elementos do vector D.*/

let a9 = [];
let b9 = [];
let c9 = [];
let d9 = [];

const funcao9 = () => {

    for (let i = 1; i <= 5; i++) {
        let randomD = Math.ceil(Math.random() * 5);
        a9.push(randomD);
        let randomE = Math.ceil(Math.random() * 5);
        b9.push(randomE);
        let randomF = Math.ceil(Math.random() * 5);
        c9.push(randomF);
    }

    d9 = a9.concat(b9, c9);
    console.log(d9);
};

//funcao9();


/*47 - Ler um vector A com 10 elementos positivos. Construír um vector B do mesmo tipo e dimensão, e cada elemento do vector B deve ser o valor negativo do elemento correspondente do vector A. Desta forma, se em [1] estiver armazenado o elemento 8, em B[1] deve ficar -8, e assim por diante. Apresentar os elementos do vector B.*/

let a10 = [];
let b10 = [];


const funcao10 = () => {

    for (let i = 1; i <= 10; i++) {

        let randomG = Math.ceil(Math.random() * 10);
        a10.push(randomG);
        b10.push(randomG * -1);
    }

    console.log(a10);
    console.log(b10);
};

//funcao10();

/* 48 - Ler um vector A com 10 elementos. Construír um vector B do mesmo tipo, e cada elemento de B deve ser a metade de cada elemento de A. Apresentar os elementos dos vectores A e B.*/

let a11 = [];
let b11 = [];


const funcao11 = () => {

    for (let i = 0; i <= 10; i++) {

        let randomG = Math.ceil(Math.random() * 10);

        a11.push(randomG);
        b11.push(a11[i] / 2);
    }
    console.log(a11);
    console.log(b11);
};

//funcao11();

/* 49 - Desenvolver um algoritmo que efectue o cálculo de uma tabuada de um número qualquer e armazene os resultados num vector A para 10 elementos. Apresentar os valores armazenados no vector.*/

let a12 = [];

const funcao12 = (n) => {

    for (let i = 1; i <= 10; i++) {
        a12.push(n * i);
    }

    console.log(a12);

};

//funcao12(9);

/* 50 - Ler 20 elementos (valores reais) para temperaturas em graus Celsius num vector A. O algoritmo deverá apresentar a menor, a maior e a média das temperaturas lidas.*/

let a13 = [];
let largest13;
let less13;

const funcao13 = () => {

    for (let i = 0; i <= 20; i++) {
        let randomH = Math.ceil(Math.random() * 20);
        a13.push(randomH);

        if (i == 0) {
            largest13 = a13[0];
            less13 = a13[0];
        }

        if (a13[i] > largest13) {
            largest13 = a13[i];
        }

        if (a13[i] < less13) {
            less = a13[i];
        }

    }

    console.log(a13);
    console.log(largest13);
    console.log(less13);
    console.log(largest13 + less13 / 2);

};

//funcao13();

/* 51 - Ler 25 elementos (valores reais) para temperaturas em graus Celsius num vector A. Construír um vector B do mesmo tipo e dimensão, e cada elemento do vector B deve ser a conversão da temperatura em graus Fahrenheit do elemento correspondente do vector A. Apresentar os vectores A e B.*/

let a14 = [];
let b14 = [];
let conversao14;

const funcao14 = () => {

    for (let i = 0; i <= 25; i++) {
        let randomH = Math.ceil(Math.random() * 25);

        a14.push(randomH);

        conversao14 = ((a14[i] * 9 + (32 * 5)) / 5);

        b14.push(conversao14);

    }

    console.log(a14);
    console.log(b14);
};

//funcao14();

/* 52 - Ler 12 elementos inteiros para um vector A. Construír um vector B do mesmo tipo e dimensão, observando a seguinte lei de formação: “Todo o elemento do vector A que for ímpar deve ser multiplicado por 2; caso contrário, o elemento do vector A deve permanecer inalterado”. Apresentar o vector B.*/

let a15 = [];
let b15 = [];


const funcao15 = () => {

    for (let i = 0; i <= 12; i++) {
        let conta15;
        let randomH = Math.ceil(Math.random() * 12);

        a15.push(randomH);

        if (a15[i] % 2 == 0) {
            conta15 = a15[i] / 2;
        } else {
            conta15 = a15[i];
        }

        b15.push(conta15);
    }

    console.log(a15);
    console.log(b15);
};

//funcao15();

/* 53 - Ler 15 elementos reais para um vector A. Construír um vector B do mesmo tipo e dimensão, observando a seguinte lei de formação: “Todo o elemento do vector A que possuír índice par deve ser dividido por 2; caso contrário, o elemento do vector A deve ser multiplicado por 1,5”. Apresentar o vector B.*/


let a16 = [];
let b16 = [];


const funcao16 = () => {

    for (let i = 0; i <= 15; i++) {
        let conta16;
        let randomH = Math.ceil(Math.random() * 15);

        a16.push(randomH);

        if (a16[i] % 2 == 0) {
            conta16 = a16[i] / 2;
        } else {
            conta16 = a16[i] * 1.5;
        }

        b16.push(conta16);
    }

    console.log(a16);
    console.log(b16);
};

//funcao16();

/* 54 - Ler 6 elementos (valores inteiros) para os vectores A e B. Construír os vectores C e D do mesmo tipo e dimensão. O vector C deve ser formado pelos elementos de índice ímpar dos vectores A e B, e o vector D deve ser formado pelos elementos de índice par dos vectores A e B. Apresentar os vectores C e D.*/

let a17 = [1, 2, 3, 4, 5, 6, 7];
let b17 = [8, 9, 10, 11, 12, 13, 14];
let c17 = [];
let d17 = [];


const funcao17 = () => {

    for (let i = 0; i < 6; i++) {

        if (i % 2 != 0) {
            c17.push("(a) " + a17[i]);
            c17.push("(b) " + b17[i]);
        } else if (i % 2 == 0) {
            d17.push("(a) " + a17[i]);
            d17.push("(b) " + b17[i]);

        }
    }

    console.log("A = " + a17);
    console.log("B = " + b17);

    console.log("indice impar = " + c17);
    console.log("indice par = " + d17);
};

//funcao17();

/* 55 - Ler dois vectores A e B com 6 elementos cada. O vector A deve aceitar apenas a entrada de valores pares, enquanto o vector B deve aceitar apenas a entrada de valores ímpares. A entrada dos valores deve ser validada pelo algoritmo e não pelo utilizador. Construír um vector C o qual irá conter a junção dos elementos dos vectores A e B, tendo portanto a dimensão 12. Apresentar o vector C.*/


let a18 = [];
let b18 = [];
let c18 = [];


const funcao18 = () => {

    while (a18.length < 6 || b18.length < 6) {
        let randomI = Math.ceil(Math.random() * 100);

        if (randomI % 2 == 0 && a18.length < 6) {
            a18.push(randomI);
        } else if (randomI % 2 != 0 && b18.length < 6) {
            b18.push(randomI);
        }
    }

    c18 = a18.concat(b18);

    console.log(a18);
    console.log(b18);
    console.log(c18);
};

//funcao18();

/* 56 - Ler dois vectores A e B com uma dimensão de 10 elementos. O vector A deve aceitar apenas a entrada de valores que sejam divisíveis por 2 e 3, enquanto o vector B deve aceitar apenas a entrada de valores que sejam múltiplos de 5. A entrada dos valores deve ser validada pelo algoritmo e não pelo utilizador.Construír um vector C o qual irá conter a junção dos elementos dos vectores A e B, tendo, portanto, uma dimensão de 20 elementos. Apresentar o vector C.*/


let a19 = [];
let b19 = [];
let c19 = [];


const funcao19 = () => {

    while (a19.length < 10 || b19.length < 10) {
        let randomJ = Math.ceil(Math.random() * 100);

        if (randomJ % 2 == 0 && randomJ % 3 == 0 && a19.length < 10) {
            a19.push(randomJ);
        } else if (randomJ % 5 == 0 && b19.length < 10) {
            b19.push(randomJ);
        }
    }

    c19 = a19.concat(b19);

    console.log(a19);
    console.log(b19);
    console.log(c19);
};

//funcao19();

/* 57 - Ler dois vectores A e B cada com 12 elementos. O vector A deve aceitar apenas a entrada de valores que sejam divisíveis por 2 ou 3, enquanto o vector B deve aceitar apenas a entrada de valores que não sejam múltiplos de 5. A entrada dos vectores deve ser validada pelo algoritmo e não pelo utilizador. Construír um vector C o qual irá conter a junção dos vectores A e B, tendo portanto a dimensão de 24 elementos. Apresentar o vector C.*/

let a20 = [];
let b20 = [];
let c20 = [];


const funcao20 = () => {

    while (a20.length < 12 || b20.length < 12) {
        let randomJ = Math.ceil(Math.random() * 100);

        if (randomJ % 2 == 0 && randomJ % 3 == 0 && a20.length < 12) {
            a20.push(randomJ);
        } else if (randomJ % 5 != 0 && b20.length < 12) {
            b20.push(randomJ);
        }
    }

    c20 = a20.concat(b20);

    console.log(a20);
    console.log(b20);
    console.log(c20);
};

//funcao20();

/* 58 - Ler os 12 elementos de um Vector A, colocá-los por ordem decrescente usando o método de ordenação por troca de posição e apresentar o Vector A mostrando os elementos ordenados.*/

let a21 = [];

const funcao21 = () => {

    for (let i = 0; i < 12; i++) {
        let randomK = Math.ceil(Math.random() * 100);
        a21.push(randomK);
    }

    let swap = false;

    do {
        swap = false;
        for (let j = 0; j < a21.length; j++) {
            if (a21[j] > a21[j + 1]) {

                let b21 = a21[j];
                a21[j] = a21[j + 1];
                a21[j + 1] = b21;
                swap = true;
            }

        }
    } while (swap);

    console.log(a21);
};

//funcao21();

/* 59 -  Ler os 8 elementos de um Vector A. Construír um Vector B com a mesma dimensão e com os elementos do Vector A multiplicados por 5. Incluír uma rotina de pesquisa binária que pesquise qualquer elemento no vector B, a pedido do utilizador.*/

const funcGenArray = (n) => {
    let b22 = [];
    for (let i = 0; i < n; i++) {
        b22.push(i);
    }
    return b22;
};


let a22 = [1, 8, 24, 30, 57, 68, 80, 90, 100];
let mArray = funcGenArray(50000);
let menorIndex = 0;
let maiorIndex = mArray.length - 1;
let iterations = 0;
let _iterations = 0;
let numberToFind = 4500;

const dumbFind = (arrayParaUsar, sch) => {

    for (let i = 0; i < arrayParaUsar.length; i++) {
        _iterations++;
        if (arrayParaUsar[i] == sch) {
            console.log("Dumb:" + _iterations);
            return;
        }
    }
};

const funcao22 = (menor, maior, arrayParaUsar, sch) => {

    let mid = Math.floor((menor + maior) / 2);
    let elArray = arrayParaUsar[mid];
    iterations++;
    if (elArray == sch) {
        //console.log(elArray);
        console.log("Smart:" + iterations);
    } else if (elArray > sch) {
        maior = mid;

        funcao22(menor, maior, arrayParaUsar, sch);
    } else if (elArray < sch) {
        menor = mid;

        funcao22(menor, maior, arrayParaUsar, sch);
    }

};

//dumbFind(mArray, numberToFind);
//funcao22(menorIndex, maiorIndex, mArray, numberToFind);

/* 60 - Ler os 15 elementos de um Vector A. Construír um Vector B do mesmo tipo que o Vector A. Cada elemento do Vector B deve ser o factorial do elemento correspodente do Vector A. Apresentar os elementos do Vector B ordenados de forma crescente usando o método de Selecção e Troca. */

let a23 = [];
let b23 = [];

const funcaofactorial = (n) => {
    let factorial1 = 1;
    for (let i = 1; i <= n; i++) {
        factorial1 *= i;
    }
    return factorial1;
};


const bubbleSort23 = () => {

    for (let i = 0; i <= 15; i++) {
        let randomM = Math.ceil(Math.random() * 15);
        a23.push(randomM);
        b23.push(funcaofactorial(a23[i]));
    }


    let swap23;

    do {
        swap23 = false;
        for (let j = 0; j <= b23.length; j++) {
            if (b23[j] > b23[j + 1]) {
                let temp = b23[j];
                b23[j] = b23[j + 1];
                b23[j + 1] = temp;
                swap23 = true;
            }
        }

    } while (swap23);

    console.log(b23);
};

const funcGenArray23 = (n, isRandom = false) => {
    let aTemp23 = [];

    for (let i = 0; i < n; i++) {
        if (isRandom) {
            let randomN = Math.ceil(Math.random() * 10);
            aTemp23.push(randomN);
        } else {
            aTemp23.push(i);
        }

    }
    return aTemp23;
};

const selectionSort = (array) => {

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }

    return array;
};

//console.log(selectionSort(funcGenArray23(15, true)));


/* 61 - Ler os 12 elementos de um Vector A. Após a sua leitura, colocar os seus elementos por ordem crescente usando o método de Bolhas. Depois de ler um vector B também com 12 elementos, ordenar os elementos de B por ordem crescente usando também o método de Bolhas. Construír um Vector C, em que cada elemento de C é a soma dos elementos correspondentes de A e B. Colocar por ordem decrescente os elementos do Vector C, usando de novo o método de Bolhas e apresentar os seus valores.*/

const funcaobubble24 = (array) => {
    let swap24;

    do {
        swap24 = false;
        for (let j = 0; j <= array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swap24 = true;
            }
        }

    } while (swap24);
    return array;
};


const funcGenArray24 = (n, isRandom = false) => {
    let aTemp = [];

    for (let i = 0; i < n; i++) {
        if (isRandom) {
            let randomN = Math.ceil(Math.random() * 10);
            aTemp.push(randomN);
        } else {
            aTemp.push(i);
        }

    }
    return aTemp;
};

const somarArrays = (arrayA, arrayB) => {
    let tempArray = [];

    for (let i = 0; i < arrayA.length; i++) {
        tempArray.push(arrayB[i] + arrayA[i]);
    }

    return tempArray;
}

const atribuirArrays = () => {
    let a24 = funcGenArray24(12, true);
    let b24 = funcGenArray24(12, true);
    let c24 = [];

    a24 = funcaobubble24(a24);
    b24 = funcaobubble24(b24);
    console.log(a24);
    console.log(b24);

    c24 = somarArrays(a24, b24);
    c24 = funcaobubble24(c24);
    console.log(c24);


};

//atribuirArrays();

/* 62 - Ler os elementos de dois Vectores, A com 20 elementos e B com 30 elementos. Construír um vector C, o qual irá conter a junção dos Vectores A e B, ficando este assim com a dimensão de 50. Apresentar os elementos do Vector C por ordem decrescente usando o método de ordenação dos Máximos Sucessivos.*/

const funcGenArray25 = (n, isRandom = false) => {
    let aTemp25 = [];

    for (let i = 0; i < n; i++) {
        if (isRandom) {
            let randomO = Math.ceil(Math.random() * 10);
            aTemp25.push(randomO);
        } else {
            aTemp25.push(i);
        }

    }
    return aTemp25;
};

const maiorElemento = (array) => {
    let maior = array[0];

    for (let i = 0; i < array.length; i++) {
        if (maior < array[i]) {
            maior = array[i];
        }
    }
    return maior;
};

const atribuirArrays25 = () => {

    let a25 = funcGenArray25(20, true);
    let b25 = funcGenArray25(30, true);

    console.log(a25);
    console.log(b25);

    let c25 = a25.concat(b25);
    console.log(c25);
    console.log(maiorElemento(c25));
};

//atribuirArrays25();

/* 63 - Ler os 30 elementos de um Vector A. Construír um Vector B do mesmo tipo, observando a seguinte lei de formação: “Todo o elemento de B deve ser o cubo do elemento de A correspondente”. Incluír uma rotina de pesquisa sequencial, para pesquisar um valor a ser determinado pelo utilizador, de entre os elementos do Vector B. */

const funcaobubble26 = (array) => {
    let swap26;

    do {
        swap26 = false;
        for (let j = 0; j <= array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swap26 = true;
            }
        }

    } while (swap26);
    return array;
};


const funcGenArray26 = (n, isRandom = false) => {
    let aTemp = [];

    for (let i = 0; i < n; i++) {
        if (isRandom) {
            let randomN = Math.ceil(Math.random() * 30);
            aTemp.push(randomN);
        } else {
            aTemp.push(i);
        }

    }
    return aTemp;
};

const atribuirArrays26 = () => {
    let a26 = funcGenArray26(30, true);
    console.log(a26);

    let b26 = [];

    for (let i = 0; i < a26.length; i++) {
        b26.push(a26[i] * a26[i])
    }

    console.log(funcaobubble26(b26));

};

//atribuirArrays26();


/* 64 - Ler os 20 elementos de um Vector A e construir um Vector B da mesma dimensão com os mesmos elementos de A acrescentados de 2. Colocar os elementos do Vector B por ordem crescente, usando o Método de Ordenação de Mínimos Sucessivos. Incluír uma rotina de pesquisa binária para pesquisar os elementos ordenados do Vector B.*/

const funcaobubble27 = (array) => {
    let swap27;

    do {
        swap27 = false;
        for (let j = 0; j <= array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swap27 = true;
            }
        }

    } while (swap27);
    return array;
};

const funcGenArray27 = (n, isRandom = false) => {
    let aTemp27 = [];

    for (let i = 0; i < n; i++) {
        if (isRandom) {
            let randomO = Math.ceil(Math.random() * 10);
            aTemp27.push(randomO);
        } else {
            aTemp27.push(i);
        }

    }
    return aTemp27;
};

const menorElemento = (array) => {
    let menor = array[0];

    for (let i = 0; i < array.length; i++) {
        if (menor > array[i]) {
            menor = array[i];
        }
    }
    return menor;
};

const atribuirArrays27 = () => {

    let a27 = funcGenArray25(20, true);

    console.log(a27);

    let b27 = [];

    for (let i = 0; i < a27.length; i++) {
        b27.push(a27[i] + 2);
    }

    console.log(b27);
    console.log(funcaobubble27(b27));
    console.log(menorElemento(b27));

};

//atribuirArrays27();

/* 65 - Ler os 20 elementos de um Vector A, os quais deverão ser valores negativos. Construír um Vector B, com o mesmo tipo e dimensão. Cada elemento do Vector B deve ser o valor positivo do elemento correspondente do Vector A. Assim sendo, se em A[1] estiver armazenado o elemento -3, em B[1] deve ser colocado 3, e assim sucessivamente. Apresentar os elementos do Vector B por ordem decrescente, usando um método de ordenação à sua escolha.*/

const selectionSort28 = (array) => {

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }

    return array;
};

const funcGenArray28 = (n, isRandom = false) => {
    let aTemp28 = [];

    for (let i = 0; i < n; i++) {
        if (isRandom) {
            let randomO = Math.ceil(Math.random() * 10);
            aTemp28.push(randomO * -1);
        } else {
            aTemp28.push(i * -1);
        }

    }
    return aTemp28;
};

const atribuirArrays28 = () => {

    let a28 = funcGenArray28(20, true);

    console.log(a28);

    let b28 = [];

    for (let i = 0; i < a28.length; i++) {
        b28.push(a28[i] * -1);
    }

    console.log(b28);
    console.log(selectionSort28(b28));
};

//atribuirArrays28();

/* 66 - Ler os 15 elementos de um Vector A. Construír um Vector B do mesmo tipo. Cada elemento de B deve ser a metade de cada elemento de A. Apresentar os elementos do Vector A por ordem decrescente e os elementos do Vector B por ordem crescente, usando um método de ordenação à sua escolha.*/

const selectionSort29 = (array) => {

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }

    return array;
};

const funcGenArray29 = (n, isRandom = false) => {
    let aTemp29 = [];

    for (let i = 0; i < n; i++) {
        if (isRandom) {
            let randomO = Math.ceil(Math.random() * 10);
            aTemp29.push(randomO);
        } else {
            aTemp29.push(i);
        }

    }
    return aTemp29;
};

const atribuirArrays29 = () => {

    let a29 = funcGenArray29(20, true);

    console.log(a29);

    let b29 = [];

    for (let i = 0; i < a29.length; i++) {
        b29.push(a29[i] / 2);
    }

    console.log(b29);
    console.log(selectionSort28(b29));
};

//atribuirArrays29();

/* 67 - Ler dois vectores A e B com 15 elementos cada. Construír dois outros Vectores C e D do mesmo tipo. Cada elemento do Vector C deve ser o somatorio do elemento correspondente do Vector A e cada elemento do Vector D deve ser o factorial do elemento correspondente do Vector B. Em seguida construír um Vector E, que deve conter a diferença dos elementos dos Vectores C e D com a soma dos elementos dos Vectores A e B. Apresentar os elementos do Vector E por ordem crescente, usando um método de ordenação à sua escolha.*/


const selectionSort30 = (array) => {

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }

    return array;
};

const funcGenArray30 = (n, isRandom = false) => {
    let aTemp30 = [];

    for (let i = 0; i < n; i++) {
        if (isRandom) {
            let randomO = Math.ceil(Math.random() * 10);
            aTemp30.push(randomO);
        } else {
            aTemp30.push(i);
        }

    }
    return aTemp30;
};

const somatorio30 = (array, ultimoIndex) => {
    let result = 0;
    for (let i = 0; i <= ultimoIndex; i++) {
        result += array[i];
    }
    return result;
}

const factorial30 = (elementoArray) => {
    let result = 1;

    for (let i = 1; i <= elementoArray; i++) {
        result *= i;
    }
    return result;
}

const diferenca30 = (array1, array2) => {
    let tempArray = [];

    for (let i = 0; i < array1.length; i++) {
        tempArray.push(array1[i] - array2[i]);
    }

    return tempArray;
}

const atribuirArrays30 = () => {

    let a30 = funcGenArray30(15, false);
    let b30 = funcGenArray30(15, false);
    let e30 = [];

    console.log(a30);
    console.log(b30);

    let c30 = [];
    for (let i = 0; i < a30.length; i++) {
        c30.push(somatorio30(a30, i));
    }
    console.log(c30);

    let d30 = [];
    for (let i = 0; i < b30.length; i++) {
        d30.push(factorial30(b30[i]));
    }
    console.log(d30);

    
    e30 = diferenca30(c30, d30);
    console.log(e30);
    console.log(selectionSort30(e30));
};

atribuirArrays30();