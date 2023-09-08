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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
  }
  
  ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
  ligaParaCliente(...cliente.telefone);  //Espalhamento

  const encomenda1 = {
    destinatario: cliente.nome,
    endereco: cliente.endereco[0],
  };

  console.log(encomenda1);

  const encomenda2= {
    destinatario: cliente.nome,
    ...cliente.endereco[0],
  };

  console.log(encomenda2);