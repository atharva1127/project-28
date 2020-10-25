
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
	
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6, mango7;
var tree;
var boy,stone;
var slingShot;

function preload(){
	boy=loadImage("Images/boy.png")

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree=new Tree(950,400);
	mango1=new Mango(950,300,70);
	mango2=new Mango(1000,370,70);
	mango3=new Mango(800,290,70);
	mango4=new Mango(1100,400,70);
	mango5=new Mango(1150,300,70);
	mango6=new Mango(750,350,70);
	mango7=new Mango(950,200,70);
	stone=new Stone(200,400,50);
	slingShot=new SlingShot(stone.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  imageMode(CENTER);
  image(boy,300,620,250,300);
  Engine.update(engine);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
 
  drawSprites()
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
}