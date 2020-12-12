const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine, world;



function setup() {
  createCanvas(800,400);

  Engine.create();
  world= engine.world;
  createSprite(400, 200, 50, 50);

  
}
var plinks= []
var particles= []
var divisions= []

var divisionheight= 300;
function draw() {

  Engine.update(engine);
  background(255,255,255);  
  drawSprites();
}