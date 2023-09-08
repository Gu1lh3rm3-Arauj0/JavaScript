/*
JavaScript
Jogo Pong
Aula 2 - Criando a raquete
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

//Variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;


function setup(){
    createCanvas(600, 400); //Determina o tamanho da tela
}

function draw(){
    background(0); //Determina a cor do fundo da tela
    mostraBolinha()
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentaRaquete();
    verificaColicaoRaquete();
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

function mostraRaquete(){
    rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);

}

function movimentaRaquete(){
    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }

    if(keyIsDown(Dwon_ARROW)){
        yRaquete += 10;
    }
}

function verificaColicaoRaquete(){
    if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
        velocidadeXBolinha *= -1;
    }
}