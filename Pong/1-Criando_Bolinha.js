/*
JavaScript
Jogo Pong
Aula 1 - Criando a bolinha
p5.js.org
*/

//Variaveis da bolinha
let xBolinha = 100; /*O let serve para declarar uma variavel*/
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

//Variaveis da velocidade
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup(){
    createCanvas(600, 400); //Determina o tamanho da tela
}

function draw(){
    background(0); //Determina a cor do fundo da tela
    mostraBolinha()
    movimentaBolinha();
    verificaColisaoBorda()
}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro); //Cria um circulo
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha; 
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
    if(xBolinha + raio > width || xBolinha - raio < 0){
        velocidadeXBolinha *= -1;
     }

     if(yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
     }
}
