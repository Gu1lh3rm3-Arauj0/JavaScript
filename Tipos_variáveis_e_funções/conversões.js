//tipo de dado
//booleanos

//Conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); //retornará false
console.log(numero == numeroString); //retornará true

console.log(numero + numeroString); //retornará 456456

//Conversão explícita
//Number() -> Função utilizada para tranformar uma string em número
console.log(numero+Number(numeroString)); //Retornará 912
//OBS: A string só pode ter valores alfanumericos

//String() -> Função utilizada para transformar um number em string
console.log(String(numero)+numeroString);
