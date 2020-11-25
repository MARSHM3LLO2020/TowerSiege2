
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var blocks1,ground,slingshot,blocks;

var gameState = "onSling";



function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1031,466,350,20);
  blocks1 = new Blocks(1030,400,40,40);
  blocks2 = new Blocks(1030,400,40,40);
  blocks3 = new Blocks(1030,400,40,40);
  blocks4 = new Blocks(1030,400,40,40);
  blocks5 = new Blocks(1070,400,40,40);
  blocks6 = new Blocks(1070,400,40,40);
  blocks7 = new Blocks(1070,400,40,40);
  blocks8 = new Blocks(990,400,40,40);
  blocks9 = new Blocks(990,400,40,40);
  blocks10 = new Blocks(990,400,40,40);
  blocks11 = new Blocks(1110,400,40,40);
  blocks12 = new Blocks(1110,400,40,40);
  blocks13 = new Blocks(950,400,40,40);
  blocks14 = new Blocks(950,400,40,40);
  blocks15 = new Blocks(1150,400,40,40);
  blocks16 = new Blocks(910,400,40,40);

 polygon = new Polygon(200,200,60,60,0);
slingshot = new Slingshot(polygon.body,{x:197,y:312});



	Engine.run(engine);
  
}

function draw(){
  rectMode(CENTER); 
  background("black");

  ground.display();
   
  textSize(30);
  fill("white");
  text("Hit The Blocks !!",650,100);

  //slingshot.display();

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
  blocks10.display();
  blocks11.display();
  blocks12.display();
  blocks13.display();
  blocks14.display();
  blocks15.display();
  blocks16.display();

  polygon.display();
  slingshot.display();


  drawSprites();
 
}

function mouseDragged(){
  if(gameState!=="Launched"){
   Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
 }

 function mouseReleased(){
     slingshot.fly(); 
    gameState = "Launched";
 }
 function keyPressed(){
     slingshot.attach(polygon.body);

 }


