const user = {
    nome: "Guilherme",
    email: "Guilherme@dominio.com",
    nascimento: "01/01/2001",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    },
};

user.exibirInfos();

const exibir = user.exibirInfos
exibir();

const exibirErrado = function(){
    console.log(this.nome);
};
exibirErrado();

//bind()
const exibirNomeCerto = exibirErrado.bind(user); //O método bind serve para ligar o valor de this a um determinado contexto.
exibirNomeCerto();
exibirErrado();

//call()
const exibirNomeCall = function(){
    console.log(this.nome, this.email);
};
exibirNomeCall.call(user); //O método call executa a função passando valores e parâmetros específicos para serem usados com o contexto do this

//apply()
//O método apply funciona de forma semelhante ai call(), porém recebea lista de argumentos em um array

const exibirNomeApply = function(){
    console.log(this.nome, this.email);
};
exibirNomeApply.apply(user, [this.nome, this.email]);