     /*
JavaScript
Jogo Pong
Aula 3 - Criando a raquete do oponete
p5.js.org
*/

//Variaveis da bolinha
let xBolinha = 100; /*O let serve para declarar uma variavel  limitando seu escopo no bloco*/
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;
// Também é possívell declarar uma váriavel utilizando "var", ela permite declarar uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.

//Variaveis da velocidade
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variaveis da raquete
let  xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//Variaveis do oponente
let xRaqueteOponete = 585;
let yRaqueteOponete = 150;

function setup(){
    createCanvas(600, 400); //Determina o tamanho da tela
}

function draw(){
    background(0); //Determina a cor do fundo da tela
    mostraBolinha()
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponete, yRaqueteOponete);
    movimentaRaquete();
    movimentaRaqueteOponente();
    verificaColicaoRaquete(xRaquete, yRaquete);
    verificaColicaoRaquete(xRaqueteOponete, yRaqueteOponete);
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

function mostraRaquete(x,y){
    rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquete(){
    if(keyIsDown(87)){
        if(yRaquete < 0){
            yRaquete += 0;
        }
        else{
            yRaquete -= 10;
        }
    }

    if(keyIsDown(83)){
        if(yRaquete + alturaRaquete > height){
            yRaquete += 0;
        }
        else{
            yRaquete += 10;
        }
    }
}

function movimentaRaqueteOponente(){
    if(keyIsDown(UP_ARROW)){
        if(yRaqueteOponete < 0){
            yRaqueteOponete += 0;
        }
        else{
            yRaqueteOponete -= 10;
        }
    }

    if(keyIsDown(DOWN_ARROW)){
        if(yRaqueteOponete + alturaRaquete > height){
            yRaquete += 0;
        }
        else{
            yRaqueteOponete += 10;
        }
    }
}

function verificaColicaoRaquete(x, y){
    if(xBolinha < 15 || xBolinha > 580){
        if(xBolinha - raio < x + comprimentoRaquete && yBolinha - raio < y + alturaRaquete && yBolinha + raio > y){
            velocidadeXBolinha *= -1;
         }
    }

}