const cliente = {
    nome: "João",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["1199999999", "1144444444"],
};

cliente.endereco = {
    rua: "R. José",
    numero: 1234,
    apartamento: true,
    complemento: "apto 987",
};

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("endereco")){
    console.error("Erro. É necessário ter um endereço cadastrado.");
}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects