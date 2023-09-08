//Parâmetros e argumentos

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("Guilherme", 22));

function multiplica(num1, num2){
    return num1 * num2;
}

console.log(multiplica(soma(2,3),soma(4,5)));

console.log(multiplica(soma(2,3)));//Retornará no console NaN