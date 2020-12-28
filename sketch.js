
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,bin1,bin2,bin3,paper1;
var engine,world;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
  paper1 = new paper(100,600,30,30);
  

   ground1 = new ground(400,650,900,10);
   
	  bin1 = new ground(570,560,20,150);
    bin2 = new ground(640,640,150,10);
    bin3 = new ground(710,560,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25);
  Engine.update(engine);
  paper1.display();
  ground1.display();

  bin1.display();
  bin2.display();
  bin3.display();

 keyPressed();

  drawSprites();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 85,y: -85});
  }

}

