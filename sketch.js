var tom,jerry,garden,t1,t2,t3;
var tomI,jerryI,gardenI,j1,j2,j3;


function preload() {
    //load the images here
gardenI=loadImage("garden.png");

    tomI=loadImage("cat2.png");

jerryI=loadImage("mouse2.png");
  
  j1=loadImage("mouse1.png");

    j2=loadImage("mouse3.png")
  
  j3=loadImage("mouse4.png");
  
  
 t1 =loadImage("cat1.png");
  
  
  t2=loadImage("cat3.png");
  
  t3=loadImage("cat4.png");
  

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(500,400);
garden.addImage(gardenI);
garden.scale=1.2
  
  tom=createSprite(800,600);
  tom.addImage(t1)
  tom.scale=0.15
  
  jerry=createSprite(200,600);
  jerry.addImage(jerryI);
  jerry.scale=0.2;
  
  

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  
 
  
  
  if(keyWentDown("left")){
   tom.addImage(tomI);
    tom.changeAnimation(tomI);
    tom.velocityX=-3;
    tom.scale=0.25;
     }
  
  if(keyWentUp("left")){
     tom.addImage(tomI);  
    tom.changeAnimation(tomI);
    tom.velocityX=0;
    tom.scale=0.25;
     }

    drawSprites();
  keyPressed();
  
   fill("red");
  textSize(32)
  text("press left arrow key",300,50)
  
}


function keyPressed(){

  //For moving and changing animation write code here
if(tom.isTouching(jerry)){
  tom.velocityX=0;
  jerry.addImage(j1);
  jerry.changeAnimation(j1);
  tom.addImage(t2);
    tom.changeAnimation(t2);

}
 
   
   
  
}

