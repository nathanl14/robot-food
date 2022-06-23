var appleImg
var backgroundImg
var burgerImg
var chocolateImg
var icecreamImg
var pizzaImg
var waterbottleImg
var saladImg
var characterImg

var PLAY=1
var END=0
var gameState=PLAY 

var apple


var END
var character
var score=0

function preload(){
  appleImg= loadImage("./mygamefolder/apple.png")
backgroundImg= loadImage("./mygamefolder/background.gif")
burgerImg= loadImage("./mygamefolder/burger.png")
chocolateImg= loadImage("./mygamefolder/chocolate.png")
icecreamImg=loadImage("./mygamefolder/icecream.png")
pizzaImg= loadImage("./mygamefolder/pizza.png")
waterbottleImg= loadImage("./mygamefolder/waterbottle.png")
saladImg = loadImage("./mygamefolder/salad.png")
characterImg= loadAnimation("./mygamefolder/running character.gif")
groundImg= loadImage("./mygamefolder/ground2.png")
}

function setup() {

  createCanvas(1900,1000);

 
  
  ground=createSprite(100,980,4000,40)
  ground.addImage("ground",groundImg)
  
character=createSprite(300,900,20,20)
character.addAnimation("character",characterImg)
character.scale=0.6
badfoodgroup=new Group()

healthyfoodgroup= new Group()
}



function draw() {
  background(backgroundImg); 
  text(mouseX + "," +mouseY , mouseX, mouseY)
text("score "+ score,300,90) 
 if(gameState===PLAY){
  ground.velocityX=-10
 

  character.y=mouseY
  if(character.y>886){
    character.y=886
    }
  
    if(character.y<100){
      character.y=100
    }
    
    if (ground.x<0){
      ground.x=ground.width/2
     }
  spawnbadfood()
     spawnhealthyfood()
 
if(healthyfoodgroup.isTouching(character)){
  score+=10
healthyfoodgroup.destroyEach()
}

  if (badfoodgroup.isTouching(character)){
    gameState=END
    textSize(100)
    text("GAME OVER",100,700)
  }
}

else if(gameState===END){
  ground.velocityX=0
  badfoodgroup.setVelocityXEach(0)
  healthyfoodgroup.setVelocityXEach(0)
 badfoodgroup.setLifetimeEach(-1)
 healthyfoodgroup.setLifetimeEach(-1)

}


  
 
  drawSprites();
  
} 


function spawnhealthyfood(){
  if (frameCount%60===0){
    Hfood=createSprite(1500,random(400,160),20,20)
    Hfood.scale=0.3
Hfood.lifetime=200
    Hfood.velocityX=-10
    var rand=Math.round(random(1,3));
    switch(rand){
      case 1: Hfood.addImage(saladImg);
      break;
      case 2: Hfood.addImage(appleImg);
      break;
      case 3: Hfood.addImage(waterbottleImg);
      break;
      
      default : break
    }
    healthyfoodgroup.add(Hfood)
  }
}

function spawnbadfood(){
  if (frameCount%50===0){
    Bfood=createSprite(1400,random(380,160),20,20)
    Bfood.scale=0.3
Bfood.lifetime=200
    Bfood.velocityX=-10
    var rand=Math.round(random(1,3));
    switch(rand){
      case 1: Bfood.addImage(chocolateImg);
      break;
      case 2: Bfood.addImage(pizzaImg);
      break;
      case 3: Bfood.addImage(icecreamImg);
      break;
      
      default : break
    }
    badfoodgroup.add(Bfood)
  }
}
