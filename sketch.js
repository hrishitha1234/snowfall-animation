const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow,path;
var backgroundImg,platform;
var boy, snowflake;


function preload(){
  backgroundImg=addImage("sprites/snow2.jpg");

}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
boy = createSprite(70,330,20,20);
boy.addAnimation(snow3.jpg);
boy.scale=0.10;

var snow = createSprite(Math.round(random(50, 350),40, 10, 10));

path=createSprite(200,100);
path.addImage(pathImg);
path.velocityY = 4;
   
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;

  }
  edges= createEdgeSprites();
    boy.collide(edges);