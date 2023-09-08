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

for(let chave in cliente){
    console.log(chave);
}

for(let chave in cliente){
    console.log(cliente[chave]);
}

for(let chave in cliente){
console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}