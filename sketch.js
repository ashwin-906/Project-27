const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var block1,block2,block3;

function setup() {
	createCanvas(600,600);
	engine = Engine.create();
	world = engine.world;
	
	bob1 = new Bob(200,300,20);
	bob2 = new Bob(240,300,20);
	bob3 = new Bob(280,300,20);
	bob4 = new Bob(320,300,20);
	bob5 = new Bob(360,300,20);

	roof = new Roof(285,100,210,20);

	rope1 = new Rope(bob1.body,roof.body,0);

  
}

function draw() {
  rectMode(CENTER);
  background(225);
  
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

   rope1.display();

   roof.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	 }
}
