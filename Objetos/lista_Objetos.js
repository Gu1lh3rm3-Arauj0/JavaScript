const cliente = {
    nome: "João",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["1199999999", "1144444444"],
};

cliente.enderecos = [{
    rua: "R. José",
    numero: 1234,
    apartamento: true,
    complemento: "apto 987",
}
];

cliente.enderecos.push({
    rua: "R. maria",
    numero: 456,
    apartamento: false,
});

console.log(cliente.enderecos);

const listaApenasApto = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
);

console.log(listaApenasApto);