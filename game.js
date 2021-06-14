class Game{

    constructor(){
    
    
    }
    
    getState(){
    
    var gameStateref=database.ref("gameState");
    gameStateref.on("value",(data)=>{
    
    gameState=data.val();
    
    
    })
    
    
    }
    
    updateGameState(state){
    
    var gameStateref=database.ref("/");
    
    gameStateref.update({
    
    "gameState":state
    
    
    })
    
    
    
    
    }
    
     start(){
    
      if(gameState===0){
    
        form=new Form() 
    
        form.display();
    
        player=new Player()
    
        player.getCount();
    
      }
player1=createSprite(200, 200, 50, 50);
player1.addImage("stand",standImg);
player1.addAnimation("walk",walkImg);
player1.addImage("dead",deadImg);
player1.addAnimation("reverse",reverseImage);
player1.addImage("reversestand",rightStandImg)

player2=createSprite(400, 200, 50, 50);
player2.addImage("stand",standImg);
player2.addAnimation("walk",walkImg);
player2.addImage("dead",deadImg);
player2.addAnimation("reverse",reverseImage);
player2.addImage("reversestand",rightStandImg)

player3=createSprite(600, 200, 50, 50);
player3.addImage("stand",standImg);
player3.addAnimation("walk",walkImg);
player3.addImage("dead",deadImg);
player3.addAnimation("reverse",reverseImage);
player3.addImage("reversestand",rightStandImg)

player4=createSprite(800, 200, 50, 50);
player4.addImage("stand",standImg);
player4.addAnimation("walk",walkImg);
player4.addImage("dead",deadImg);
player4.addAnimation("reverse",reverseImage);
player4.addImage("reversestand",rightStandImg)

players=[player1,player2,player3,player4];

block1=createSprite(280,50,400,10);
block1.addImage("hr",hrImage);
block1.scale=2;

block2=createSprite(55,270,10,300);
block2.addImage("vr",vrImage);
block2.scale=2;


block3=createSprite(300,430,670,10);
block3.addImage("hr1",hrImage);
block3.scale=2;

block4=createSprite(480,150,90,50);
block4.addImage("vr",vrImage);
block4.scale=1;

block5=createSprite(600,250,150,10);
block5.addAnimation("hr",hrImage);
block5.scale=1;
block6=createSprite(600,350,150,10);
block6.addAnimation("hr",hrImage);

block6.scale=1;

block7=createSprite(700,150,10,150);
block7.addAnimation("vr",vrImage);
block7.scale=1;

block8=createSprite(900,50,400,10);
block8.addAnimation("hr",hrImage);
block8.scale=2;

block9=createSprite(1130,200,10,300);

block9.addAnimation("vr",vrImage);
block9.scale=2;

block10=createSprite(830,350,200,10);

block10.addAnimation("hr",hrImage);
block10.scale=1;


block11=createSprite(950,450,10,200);

block11.addAnimation("vr",vrImage);
block11.scale=1;

block12=createSprite(1130,450,10,200);

block12.addAnimation("vr",vrImage);
block12.scale=2;

block13=createSprite(1130,650,10,200);

block13.addAnimation("vr",vrImage);
block13.scale=2;

block14=createSprite(830,550,200,10);

block14.addAnimation("hr",hrImage);
block14.scale=1;

block15=createSprite(930,750,300,10);

block15.addAnimation("hr",hrImage);
block15.scale=2;


block16=createSprite(630,750,350,10);

block16.addAnimation("hr",hrImage);
block16.scale=2;

laptop=createSprite(280,300,20,20);

     }
     
     play(){
       
      form.hide();
      Player.getPlayerInfo();
      if(allPlayers!==undefined){
      //textSize(30);
      // text("THE GAME HAS BEGUN",100,200);
      background(0);
  
      image(bgImage,30,70,500,400);
      var index=0;
      var x=200;
      var y=0;


      drawSprites();

      for(var plr in allPlayers){

      index++;
      x=x+220;
      y=displayHeight-allPlayers[plr].distance


     if(index===player.index){
      camera.position.x=players[index-1].x;
      camera.position.y=players[index-1].y;
      fill(255);
      textSize(25);
      text(allPlayers[plr].name,players[index-1].x,players[index-1].y-75);



     
      

      if(keyDown(UP_ARROW)){
    
      players[index-1].y=players[index-1].y-5;
      players[index-1].changeAnimation("walk",walkImg);
      
    }
    
     if(keyDown(DOWN_ARROW)){
    
      players[index-1].y=players[index-1].y+5;
      players[index-1].changeAnimation("walk",walkImg);
    
    }
    
     if(keyDown(RIGHT_ARROW)){
    
     players[index-1].x=players[index-1].x+5;
    
     players[index-1].changeAnimation("reverse",reverseImage)
    
     }
    
     if(keyDown(LEFT_ARROW)){
    
     players[index-1].x=players[index-1].x-5;
    
     players[index-1].changeAnimation("walk",walkImg);
    
     }
     if(keyWentUp(UP_ARROW)|| keyWentUp(DOWN_ARROW)|| keyWentUp(LEFT_ARROW)){
    
      players[index-1].changeImage("stand",standImg);
    
    
     }
    if( keyWentUp(RIGHT_ARROW)){
      players[index-1].changeImage("reversestand",rightStandImg)
    }
    
    
     players[index-1].collide(block1);
     players[index-1].collide(block2);
     players[index-1].collide(block3);
     players[index-1].collide(block4);
     players[index-1].collide(block5);
     players[index-1].collide(block6);
     players[index-1].collide(block7);
     players[index-1].collide(block8);
     players[index-1].collide(block9);
     players[index-1].collide(block10);
     players[index-1].collide(block11);
     players[index-1].collide(block12);
    
    if(laptop.isTouching(players[index-1])){
     if(lpCount===0){
      lpSwitch=createSprite(laptop.x+200,laptop.y+200,20,20);
      lpSwitch.shapeColor="red";
    
     }
       lpCount++; 
    }
    
    if(mousePressedOver(lpSwitch)){
      gameState1="text";
      
    
    
    }
     if(gameState1==="text"){
    
      fill("blue");
      textSize(20);
     text("SCAN THE CARD",laptop.x,laptop.y+100);
    
     }
     /*if (mousePressedOver(lpSwitch)) {
      lpSwitch.destroy();
      gameState1="display";
      if(cardcount===0){
     card = createSprite(camera.x, camera.y-50);
      card.setAnimation("cardfront");
      card.scale=0.7;
      }
      cardcount++;
      
     
    }
    if(gameState1==="display"){
      textSize(20);
      fill("red");
      text("Scan the card",sprite.x-150,sprite.y+100);
      if(flipcount===0){
      flip = createSprite(sprite.x+100,sprite.y+100,10,10);
      flip.setAnimation("flip");
      flip.scale=0.3;
      }
      flipcount++;
    }
     if(gameState1==="afterScan"){
     textSize(30);
     fill("red");
     text("Task completed",sprite.x-150,sprite.y+100);
     flip.destroy();
    
     textCount++;
     }
    if(textCount>50){
      gameState1="next";
      card.destroy();
    }
    if (mousePressedOver(flip)) {
     
      gameState1="afterScan";
     
      card.setAnimation("cardBack");
      card.scale=0.7;
     
      
    }
  camera.x= players[index-1].x;
  camera.y= players[index-1].y;
  */ 
  } 
}
      }
    }

      
    
     
    
    end(){
    
    console.log("THE GAME HAS ENDED");
    
    fill("blue");
    
    textSize(25);
    
     text("rank: " + players[index-1].rank,displayWidth/2,camera.position.y);
    
     
    
    }
    
    
    
    }
    
    
    