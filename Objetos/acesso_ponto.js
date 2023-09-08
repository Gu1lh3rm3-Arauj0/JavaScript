const cliente = {
    nome: "André",
    idade: 32,
    cpf: "11111111111",
    email: "andre@dominio.com",
};

console.log(`O nome do ciente é ${cliente.nome} e ele tem ${cliente.idade} anos`); //Exibe o nome e a idade do cliente

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);


