/*
JavaScript
Laços e Listas
Jogo Freeway
Aula 1 - Background, carro e ator
p5.js.org
*/

//Variaveis das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//Variaveis dos carros
let xCarro = 420;
let yCarro = 40;

//Variaveis do ator
let xAtor = 100;
let yAtor = 366;

function preload(){
    imagemDaEstrada = loadImage("Imagens/estrada.png");
    imagemDoAtor = loadImage("Imagens/ator-1.png");
    imagemCarro = loadImage("Imagens/carro-1.png")
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
}

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function mostraCarro(){
    image(imagemCarro, xCarro, yCarro, 50, 40);
}

function movimentaCarro(){
    xCarro -= 2;
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 2;
    }
    if(keyIsDown(DOWN_ARROW)){
        yAtor += 2;
    }
}