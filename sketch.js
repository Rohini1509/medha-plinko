const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies 

var balls = [];
var plinkos = [];
var divisions = [];
var ball;
var divisionHeight = 300;
var score = 0;
var count = 0;
var gameState = "start";

function setup() 
{
  createCanvas(800, 800);
  
  engine = Engine.create();
  world = engine.world;

  g = new Ground(0,800, 40,40);
  console.log(g);
  
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <= width; k+=80) 
   {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j+=50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j+=50) 
    {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j+=50) 
    {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j+=50) 
    {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() 
{
  background("purple");
  Engine.update(engine);
  ground.display();
  g.display();
  
  
  if(gameState === "start")
  {
            fill("green")
            textSize(30)
            text("SCORE : "+score,10,25);

                    
                    for (var i = 0; i < plinkos.length; i++) 
            
                plinkos[i].display();  
            
            
                    if ( count >= 10)
                    { 
                    gameState = "end"; 
                    }   
              
            if(ball)
            {
            ball.display();
            }
            for (var k = 0; k < divisions.length; k++) 
            {
                divisions[k].display();
            }
                
  }
  
  
  
  if ( gameState === "end") 
  {  
    fill("red");  
    textSize(100);
    text("GameOver", 150, 250);
    
    fill("yellow");
    textSize(60);
    text("SCORE :" + score, 220 ,500);

    plinkos = [];
    balls = [];
    divisions = [];
  }
   
}


function mousePressed()
{
  if(gameState!=="end")
  {
     count++;
     ball=new Ball(mouseX, 10, 10); 
     console.log(ball)
     //ball.display()
  }   
}
