
var sh
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;

var player,playerRe;
var animalsGroup,tiger,lion,bear,dog;
var spawnStonesGroup,stone;
var bg;
var food;
var invisibleGround;

function preload(){
  bg = loadImage("forest.png");
  king = loadAnimation("lion1.png","lion2.png","lion3.png","lion3.png","lion4.png","lion5.png","lion6.png","lion7.png","lion8.png","lion9.png","lion10.png","lion11.png","lion12.png");
  plr = loadAnimation("plr.png","plr2r.png");
  plr45 = loadAnimation("plr3re.png","plr4re.png");
  liger = loadAnimation("tiger1.png","tiger2.png","tiger3.png","tiger4.png","tiger5.png","tiger6.png","tiger7.png","tiger8.png","tiger9.png","tiger10.png","tiger11.png","tiger12.png");
  roc = loadImage("stone1.png"); 
  roc2 = loadImage("stone2.png");
   roc3 = loadImage("stone3.png"); 
  roc4 = loadImage("stone4.png"); 
  roc5 = loadImage("stone5.png"); 
  roc6 = loadImage("stone6.png");
  bullet = loadImage("bullet.png");
  plr369 = ("plr3re.png");


}


function setup(){
  createCanvas(900,500);
  back = createSprite(350,150,900,500);
  back.addImage("forest",bg);
  back.scale = 1.5;
  back.velocityX = -6;



  player = createSprite(34,380);
  player.addAnimation("plrRunning",plr);
  player.scale = 1.5;

   
 

  invisibleGround = createSprite(100,400,10000,10);
  invisibleGround.visible = false;


  player.setCollider("rectangle",0,0,player.width,player.height);
  player.debug = false;


  animalsGroup = createGroup();
  
 sh = createSprite(34,220);
 sh.addImage("fire",bullet);
 sh.scale = 0.1;
 sh.visible = false;
 sh.setCollider("rectangle",0,0,sh.width,sh.height);


 var ivg = createSprite(34,230,1000,10);
 ivg.visible = false;



}

function draw(){
  background("white");

  spawnStones();
  spawnAnimals();
  

  if(back.x<200){
    back.x = 450;
  }
  drawSprites();

  player.collide(invisibleGround);
  


  


  if(gameState === PLAY){
   back.velocityX = -(4 + 3* score/100);
  
    score = score + Math.round(getFrameRate()/60);
    
   if (back.x < 0){
      back.x = back.width/2;
    }
    
    if(keyDown("space")&& player.y >= 100) {
        player.velocityY = -12;
        
      
        
        
    }

  

  
    if(keyDown("UP_ARROW")){
      sh.visible = true;
      sh.velocityX = 10;   

    }


    
   player.velocityY = player.velocityY + 0.8
   
   
   text("Score =  " +score,770,70);
   textSize(500);
   fill("black");
   stroke("white");

  

    
  
  }



function  spawnStones(){
  if(frameCount % 100 === 0){
    var rock = createSprite(900,380,10,40);
    rock.velocityX = -(6 + score/100);

    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: rock.addImage(roc);
      break;
      case 2: rock.addImage(roc2);
      break;
      case 3: rock.addImage(roc3);
      break;
      case 4: rock.addImage(roc4);
      break;
      case 5: rock.addImage(roc5);
      break;
      case 6: rock.addImage(roc6);
      break;
      default: break;
    }
    rock.scale = 0.5;
    rock.lifetime = 200;



  }
}

function spawnAnimals(){
  if(frameCount %  60 === 0){
    var animal = createSprite(900,375,10,50);

    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: animal.addAnimation(king);
      break;
      case 2: animal.addAnimation(liger);
      break;
      default:break;

    }

    animal.scale = 0.9;
    animal.lifetime = 200;

  }
}
}
