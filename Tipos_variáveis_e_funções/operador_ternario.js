//Operador Ternário

const idadeMinima = 18;
const idadeCliente = 16;

//Usando o if
if(idadeCliente >= idadeMinima){
    console.log("Pode beber cerveja");
}else{
    console.log("Só pode beber suco");
}

//Usando um operador ternário
console.log(idadeCliente >= idadeMinima ? "Pode beber cerveja" : "Só pode beber suco");
//Dica de boa prática: Não usar operador ternário entro de operador ternário