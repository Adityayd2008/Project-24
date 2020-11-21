
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1,side2,side3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	side1 = new Dustbinside (490 , 320 , 100 ,20, 180);
	side2 = new Dustbinside  (710 , 320 , 100 ,20, 180);
	side3 = new Dustbinside  (600 , 360 ,20 ,200 , PI*0);
	ground = new Ground (400,380,800,20);
	paper = new Paper (100,340,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  keyPressed();
  side1.display();
  side2.display();
  side3.display(); 
  ground.display();
  paper.display();
 
  drawSprites();
 
}


function keyPressed ()
{
 if (keyCode === UP_ARROW)
 {
	
	
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-4});
	 
}

}
