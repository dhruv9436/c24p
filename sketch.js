const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   iron= new Iron(700,320,70,70);
    rubber=new Rubber(980,390,30)
    ground = new Ground(600,height,1200,20)

    stone=new Stone(800,200)
    
Hammer=new Hammer(200,200)

}

function draw(){
    background(0);
    Engine.update(engine);
    
    
    iron.display();
        ground.display();
    stone.display();
  
    rubber.display();
    
    Hammer.display();
}
