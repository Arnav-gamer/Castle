const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ground1,ground2;
var wall1,wall2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var flag;
var stick,flag1,flag2;

function setup() {
 createCanvas(450,400);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(200,390,500,10);
  ground1 = new Ground(450,200,10,400);
  ground2 = new Ground(0,200,10,400);
  wall1 = new Castle(330,250,10,300);
  wall2 = new Castle(85,250,10,300);
  box1 = new Castle(200,370,150,50);
  box2 = new Castle(300,345,50,100);
  box3 = new Castle(115,345,50,100);
  box4 = new Castle(115,245,50,100);
  box5 = new Castle(300,245,50,100);
  box6 = new Castle(250,295,50,100);
  box7 = new Castle(165,295,50,100);
  box8 = new Castle(207,295,35,100);
  box9 = new Castle(207,220,135,50);
  box10 = new Castle(200,120,10,150);
  flag = new Castle(240,70,70,50);
  stick = new Castle(200,200,10,100);
  flag1 = new Castle(370,125,70,50);
  flag2 = new Castle(125,125,70,50);

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  ground1.display();
  ground2.display();
  wall1.display();
  wall2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  flag.display();
  stick.display();
  flag1.display();
  flag2.display();
  drawSprites();
}