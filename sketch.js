var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var  cw, cwImage, paperImg, roadImg;

function preload(){
  
}
function setup(){
  canvas = createCanvas(1515,715);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if(playerCount === 4){
  game.update(1);
}

if(gameState === 1){
  game.play();
}



//if (gameState === 0){
  /*cw = createSprite(400, 400);
  cw.addAnimation("a",cwImage);
  
drawSprites();
}*/

}
