//template string

const nome = "Gui";
const cidadeDeNascimento = "Osasco";
const idade = 22;

//Sem template string
//const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + "e nasci na cidade de " + cidadeDeNascimento;

console.log(apresentacao);

//Com template string
const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao);