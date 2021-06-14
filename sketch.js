var player1,player2,player3,player4,database;
var players;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,block15,block16;

var bgImage;
var standImg,walkImg,deadImg,hrImage,vrImage,reverseImage,rightStandImg;
var laptop,emergencyButton,laptopImage,emergencyButtonImage;
var gateImg;
var lpSwitch;//lpCount=0;
var card,cardImage,left90Image,right90Image;
var gameState1="noText";
var lpCount=0;
var cardcount=0;
var flipcount=0;
var textCount=0;
//var gameState2="notdisplay";
var card;
var flip;


function preload(){

standImg=loadImage("images/stand.png");
deadImg=loadImage("images/dead.png");
walkImg=loadAnimation("images/walk1.png","images/walk2.png","images/walk3.png","images/walk4.png");
bgImage=loadImage("images/bg1.jpg");
hrImage=loadImage("images/hr.png");
vrImage=loadImage("images/vr.png");
reverseImage=loadAnimation("walk1'.png","walk2'.png","walk3'.png","walk4'.png");
rightStandImg=loadImage("walk2'.png");
left90Image=loadImage("left 90.png");
right90Image=loadImage("right90.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  game=new Game();
  
  game.getState();

  game.start();

}

function draw() {
  if(playerCount===4){
    game.updateGameState(1);
     }
      if(gameState===1){
   
      game.play();
   
   
      }
   
   if(gameState===2){
   
   game.end();
   }
}