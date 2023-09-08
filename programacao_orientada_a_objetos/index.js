import User from "./User.js";
import Admin from "./admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Guilherme', 'guilherme@dominio.com', '01/01/2021');

//novoUser.#nome = "João"; //Retorna um Erro
//console.log(novoUser.#nome); //Retorna um Erro
//console.log(novoUser.#montaObjUser) Retorna um Erro
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'rodrigo@dominio.com', '01/01/2001');
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.nome);

novoAdmin.nome = 'André';
console.log(novoAdmin.nome);

const novoDocente = new Docente('Ana', 'ana@dominio.com', '01/01/2001');
console.log(novoDocente.exibirInfos());