var rocket,asteroid,background;
var rocketImg,asteroidImg,backgroundImg;
function preload(){
  rocketImg = loadImage("rocket.png")
  asteroidImg = loadImage("asteroid.png")
  backgroundImg = loadImage("background.jpg")
}
function setup() {
  createCanvas(800,400);
  background = createSprite(200,100,200,200);
  rocket = createSprite(400, 350, 50, 50);
  asteroid = createSprite(random(10,800),10,50,50);
  asteroidGroup = createGroup();
  background.addImage(backgroundImg)
  background.scale=1.2;
  rocket.addImage(rocketImg)
  rocket.scale=0.08;
  asteroid.addImage(asteroidImg)
  asteroid.scale=0.08;
  asteroidGroup=createGroup
}  
function draw() { 
  //background(0);  
  drawSprites();
  controls()
  movebg()
}
function controls(){
  if(keyDown(LEFT_ARROW)){
    rocket.x=rocket.x-3;
  }
  if(keyDown(RIGHT_ARROW)){
    rocket.x=rocket.x+3;
  }
}
function movebg(){
  background.velocityY=1
  if(background.y===240){
    background.y=100;
  }
}