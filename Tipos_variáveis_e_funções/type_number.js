//Type number

const meuNumero = 3; //Cria uma variável constante do tipo number
const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;
/*
Operadores matemáticos:
+ Soma
- Subtração
* Multiplicação
/ Divisão
*/

console.log(operacaoMatematica); //O console.log imprime algo dentro do terminal

//Ponto flutuante
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5; //O Javascript aceita a declaração de uma float sem o zero antes

const novaOperacao = primeiroNumero/numeroPontoFlutuante;
console.log(novaOperacao);

//NaN -> Not a Number -> Não é um número
const nome = "Guilherme";
console.log(nome*primeiroNumero); //O Terminal retornará "NaN"

//Divisão 0/0
var a = 0
var b = 0
console.log(a/b) // O Terminal retornará "NaN"

//Divisão por zero
var a = 10
var b = 0
console.log(a/b) //O terminal retornará "Infinity"