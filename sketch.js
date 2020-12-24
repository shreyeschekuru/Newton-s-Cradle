
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constaint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofTop,ropeObj;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofTop = new roof(400,50,600,35);

	bobObject1 = new bob(150,350,120);
	bobObject2 = new bob(270,350,120);
	bobObject3 = new bob(390,350,120);
	bobObject4 = new bob(510,350,120);
	bobObject5 = new bob(630,350,120);
	
	ropeObj1 = new rope(bobObject1,roofTop,0,0);
	ropeObj2 = new rope(bobObject2,roofTop,0,0);
	ropeObj3 = new rope(bobObject3,roofTop,0,0);
	ropeObj4 = new rope(bobObject4,roofTop,0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50,50,50);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofTop.display();
  ropeObj.display();
  drawSprites();
 
}



