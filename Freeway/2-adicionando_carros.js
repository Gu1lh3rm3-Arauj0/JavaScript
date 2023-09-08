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
let xCarro1 = 600;
let yCarro1 = 40;
let xCarro2 = 600;
let yCarro2 = 96;
let xCarro3 = 600;
let yCarro3 = 150;

//Velocodades
let velocidadeCarro1 = 2;
let velocidadeCarro2 = 3;
let velocidadeCarro3 = 3.2;

//Variaveis do ator
let xAtor = 100;
let yAtor = 366;

function preload(){
    imagemDaEstrada = loadImage("Imagens/estrada.png");
    imagemDoAtor = loadImage("Imagens/ator-1.png");
    imagemCarro1 = loadImage("Imagens/carro-1.png");
    imagemCarro2 = loadImage("Imagens/carro-2.png");
    imagemCarro3 = loadImage("Imagens/carro-3.png");
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
    movimentaCarro(xCarro1);
    movimentaCarro(xCarro2);
    movimentaCarro(xCarro3);
}

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function mostraCarro(){
    image(imagemCarro, xCarro, yCarro, 50, 40);
}

function movimentaCarro(){
    xCarro1 -= velocidadeCarro1;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
}

function voltaPosicaoInicialCarro(x){
    if(x < -50){
        x = 600;
    }
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 2;
    }
    if(keyIsDown(DOWN_ARROW)){
        yAtor += 2;
    }
}