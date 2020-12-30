
var database;
var gameState = 0;
var playerCount = 0;
var game;
var player;
var form;
var allPlayers;
var car1;
var car2;
var carArray=[];
var carsatend = 0;





function preload(){
    carImage1 = loadImage("images/car1.png")
    carImage2 = loadImage("images/car2.png")
    trackImage = loadImage("images/track.jpg")
}



function setup(){
    createCanvas(displayWidth,displayHeight);
   
    database = firebase.database();
    game = new Game()
    game.getgameState()
    game.start()

   
}

function draw(){
    background("yellow");
    if(playerCount === 2){
        game.updategameState(1)

    }
    if(gameState === 1){
        game.play()
    }

    if(gameState === 2){
        game.end()
    }
   
    
}










