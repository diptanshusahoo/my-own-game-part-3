var player1,player2,ammo,AMMO;
var obstacles;
var shooter1Img,shooter2Img,rocketimg,rotateimg;
var ammoImg;
var ground,ground2;
var gameState = "play"
var score;

function preload(){
 rocketimg= loadImage("rocket.png");
 rotateimg= loadImage("rotate.png");
 ammoImg= loadImage("ammo.png");
}




function setup(){
  createCanvas(1200,600);

  player1= createSprite(300,470);
  player1.addImage("rocket",rocketimg);
  player1.scale= 0.2;

  player2 = createSprite(300,140);
  player2.addImage("rotate",rotateimg);
  player2.scale=0.2;
  
  
  

  ground = createSprite(400,550,2000,10);
  ground2 = createSprite(200,240,2000,10);

  player1.setCollider("rectangle",20,10,500,650);
  player1.debug=true;

  player2.setCollider("rectangle",20,10,500,650);
  player2.debug=true;

  score = 100;
}




function draw(){
  background(0);

  //displaying the score 
  text("Lifeline2-"+ score, 50,50)
  text("Lifeline1-"+ score, 50 ,280)
  if(gameState === "play"){

    if(keyDown("left_arrow")){
      player1.x = player1.x-5;
    }

    if(keyDown("right_arrow")){
      player1.x = player1.x+5;
    }
    }

 if(gameState === "play"){

  
   if(keyDown("a")){
     player2.x = player2.x-5;
   }

   if(keyDown("d")){
    player2.x = player2.x+5;
  }
 }


  if(keyDown("space")){
    createAmmo();
  }

  if(keyDown("x")){
    createArrow();
  }

 
  if (player1.x >1200) {
   player1.x=90;
   player1.y=470;
  }

  if (player2.x >1200) {
    player2.x=90;
    player2.y=140;
   }

    
  if (player1.x <90) {
    player1.x=1200;
    player1.y=470;
   }
 
   if (player2.x <90) {
     player2.x=1200;
     player2.y=140;
   }
  drawSprites();
}




function createAmmo(){
 var ammo = createSprite(50,50,50,10);
 ammo.addImage("ammo",ammoImg);
 ammo.x=player1.x;
 ammo.y=400;
 ammo.velocityY=-4;
 ammo.lifetime = 100;
 ammo.scale=0.1;
 
}


function createArrow(){
  var AMMO = createSprite(50,50,10,10);
  AMMO.addImage("ammo",ammoImg);
  AMMO.x=player2.x;
  AMMO.y=200;
  AMMO.velocityY=4;
  AMMO.lifetime = 100;
  AMMO.scale=0.1;
}





























