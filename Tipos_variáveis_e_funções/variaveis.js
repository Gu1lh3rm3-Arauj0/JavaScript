/*
Variáveis
No JS existem três tipos de modos de declarar uma váriavel: var, let e const
*/

//var
var altura = 5;
var comprimento = 7;

area = altura*comprimento;
console.log(area);
//Apesar do console reconhecer a variável área é uma boa prática sempre declarar as variáveis
//OBS: O compilador sempre irá ler e armazenar todas as variáveis do tipo var (indepedente da ordem ou local) antes de executar o codigo
//var é uma variável do tipo global

//let
let forma = "Retângulo";
let h = 5;
let b = 7;
let area

if(forma === "Retângulo"){
    area = h*b;
}else{
    area = (h*b)/2;
}

console.log(area);
//Diferente da var, o let não é uma variável global, e se definido dentro de um bloco de código ele poderá ser redeclarado em outro

//const
const tipo = "Quadrado";
const c = 5;
const d = 5;

let e = c*d;
console.log(e);
//Uma Variavel do tipo const deve sempre ser incializada com um valor
//OBS: O valor de uma const não poderá ser alterado durante programa

/*
Resumo:
var (escopo global) - escopo fora do bloco. let (escopo local) - escopo restrito ao bloco. const (não permitindo reatribuição e nem redeclaração) - constante. não respeitando bloco e permitindo a redeclaração e reatribuição.
*/