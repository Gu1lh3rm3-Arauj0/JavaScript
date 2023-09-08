/*
JavaScript
Laços e Listas
Jogo Freeway
Aula 2 - Adicionando carros para sempre
p5.js.org
*/

//Variaveis das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//Variaveis dos carros
let ycarros = [40, 96, 150, 210, 270, 318]; //Criando uma lista
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2, 3, 3.2, 3.2, 3, 2];


//Variaveis do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function preload(){
    imagemDaEstrada = loadImage("Imagens/estrada.png");
    imagemDoAtor = loadImage("Imagens/ator-1.png");
    imagemCarro1 = loadImage("Imagens/carro-1.png");
    imagemCarro2 = loadImage("Imagens/carro-2.png");
    imagemCarro3 = loadImage("Imagens/carro-3.png");
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    movimentaCarro();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    marcaPonto();
}

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function mostraCarro(){
    for( let i = 0; i < imagemCarros.length; i++){ //Criando um laço de repetição
        image(imagemCarros[i], xCarros[i], ycarros[i], 50, 40);
    }
}

function movimentaCarro(){
    for( let i = 0; i < velocidadeCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 2;
    }
    if(keyIsDown(DOWN_ARROW)){
        yAtor += 2;
    }
}

function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        voltaAtorPosicaoInicial();
      }
    }
  }
  
  function voltaAtorPosicaoInicial(){
    yAtor = 366;
  }

  function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60))
    text(meusPontos, width / 5, 27);
  }
  
  function marcaPonto(){
    if (yAtor < 15){
      meusPontos += 1;
      voltaAtorPosicaoInicial();
    }
  }