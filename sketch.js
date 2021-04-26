
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,rope1,roof,base,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10;

function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	fill("cyan");
	//Create the Bodies Here.
	bob1=new bob(200,400,40);
	
	roof=new BaseClass(400,250,1,1);

	rope1=new rope(bob1.body,roof.body,-80,0);

	
	base=new BaseClass(400,600,1000,10);
	

	b1=new blocks(420,580,50,20);
	b2=new blocks(420,560,50,20);
	b3=new blocks(420,540,50,20);
	b4=new blocks(420,520,50,20);
	b5=new blocks(420,500,50,20);
	b6=new blocks(420,480,50,20);
	b7=new blocks(420,460,50,20);
	b8=new blocks(420,440,50,20);
	b9=new blocks(420,420,50,20);
	b10=new blocks(420,400,50,20);

	c1=new blocks(500,580,50,20);
	c2=new blocks(500,560,50,20);
	c3=new blocks(500,540,50,20);
	c4=new blocks(500,520,50,20);
	c5=new blocks(500,500,50,20);
	c6=new blocks(500,480,50,20);
	c7=new blocks(500,460,50,20);
	c8=new blocks(500,440,50,20);
	c9=new blocks(500,420,50,20);
	c10=new blocks(500,400,50,20);

	d1=new blocks(570,580,50,20);
	d2=new blocks(570,560,50,20);
	d3=new blocks(570,540,50,20);
	d4=new blocks(570,520,50,20);
	d5=new blocks(570,500,50,20);
	d6=new blocks(570,480,50,20);
	d7=new blocks(570,460,50,20);
	d8=new blocks(570,440,50,20);
	d9=new blocks(570,420,50,20);
	d10=new blocks(570,400,50,20);
	
	
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  

  bob1.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();
  c10.display();

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();
  d9.display();
  d10.display();

  base.display();

  roof.display();

  rope1.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85});
	   
	 }
   }



