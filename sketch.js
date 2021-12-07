// Actividad Inicial PRO C20 Fundamentos de Motores Físicos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
  
var ground, topWall, rightWall, leftWall, ball;  
var Varrow, Harrow;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;


  ground =new Ground(200,390,400,20);
  topWall = new Ground(200,10,400,20);
  rightWall = new Ground(390,200,20,400);
  leftWall = new Ground(10,200,20,400);
  
var ball_options = {
restitution:0.85
}

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ball);

  Varrow = createImg('up.png');
  Varrow.position(30,30);
  Varrow.size(50,50);
  Varrow.mouseClicked(Vforce);

  Harrow =createImg("right.png");
  Harrow.position(90,30);
  Harrow.size(50,50);
  Harrow.mouseClicked(Hforce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(200);
  Engine.update(engine);
  ground.show();
  topWall.show();
  leftWall.show();
  rightWall.show();
  
  fill("lightblue")
  ellipse(ball.position.x,ball.position.y,20);
   
}

function Hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function Vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}