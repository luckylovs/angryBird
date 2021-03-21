const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(230,100,50,80);
    box3 = new Box(210,100,50,20);
    box4 = new Box(250,100,50,70);
    ground = new Ground(200,380,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box2.display()
    box3.display()
    box4.display();
    ground.display();
    box1.display();

   
}