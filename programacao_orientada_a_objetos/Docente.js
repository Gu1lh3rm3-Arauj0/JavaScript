import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo);
    };

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado no ${curso}.`;
    };
};

//const novoDocente = new Docente ('Mariana', 'mariana@dominio.com', '01/01/2001');
//console.log(novoDocente);
//console.log(novoDocente.exibirInfos());
//console.log(novoDocente.aprovaEstudante('Guilherme', 'JS'));
