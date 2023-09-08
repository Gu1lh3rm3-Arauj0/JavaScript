// boolean
let usuarioLogado = true;
let contaPaga = false;

//truthy or falsy

// 0 -> false
// 1 -> true

console.log(0 == false);
console.log('' == false); 
console.log(1 == true);
//Em ambos os casos irá retornar no terminal o valor true

//undefined e null
let minhaVar;
let varNull = null;

console.log(minhaVar); //retornará no console undefined
console.log(varNull); //retornará no console null

console.log(typeof minhaVar); //typeof serve para visualizar o tipo da variável
console.log(typeof varNull);