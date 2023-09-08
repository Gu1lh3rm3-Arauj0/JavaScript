export default class User{
    #nome //Declara a propriedade como privada, assim impedindo que ela seja alterada a qualquer momento
    #email
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome,
        this.#email = email,
        this.nascimento = nascimento,
        this.role = role || "estudante",
        this.ativo = ativo
    };

    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email;
    }
    
    set nome(novoNome){
        if (novoNome === ' '){
            throw new Error('Formator não válido');
        }
        this.#nome = novoNome;
    };


   // #montaObjUser(){ //Declara um metodo como privado, assim impedindo que ele seja alterada a qualquer momento
      //  return ({
         //   nome: this.#nome,
           // email: this.#email,
           // nascimento: this.nascimento,
          //  role: this.role,
           // ativo: this.ativo
       // }); ({}) -> returna um objeto
    //};

    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    };
};

//const novoUser = new User('Guilherme', 'guilherme@dominio.com', '01/01/2021');
//console.log(novoUser);
//console.log(novoUser.exibirInfos());

//console.log(User.prototype.isPrototypeOf(novoUser)); //true