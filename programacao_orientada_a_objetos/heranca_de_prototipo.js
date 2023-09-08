const user = {
    nome: "Guilherme",
    email: "Guilherme@dominio.com",
    nascimento: "01/01/2001",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    },
};

const admin = {
    nome: "Maria",
    email: "maria@dominio.com",
    role: "admin",
    criarCurso(){
        console.log('Curso criado');
    },
};

Object.setPrototypeOf(admin, user); //Declara que o objeto user será usado como protótipo para o objeto admin
admin.criarCurso();
admin.exibirInfos();
