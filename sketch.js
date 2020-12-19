var car,wall;
var speed,weight;



function setup() 
{
  createCanvas(800,400);
  speed=Math.round(random(30,120));
  weight=Math.round(random(500,1900))
  car=createSprite(50,200,80,40);
  car.shapeColor='cyan'
  car.velocityX=speed
  wall=createSprite(750,200,60,height/2);
  wall.shapeColor= 'gray'
}


function draw() 
{
  background("black");  

  if(wall.x-car.x<(wall.width+car.width)/2)
  {
    car.velocityX=0;
    var defor=(0.5*weight*speed*speed)/22500
    if(defor<100)
    {
      car.shapeColor="green"
    }
    if(defor>100 && defor<180)
    {
      car.shapeColor="yellow"
    }
    if(defor>180)
    {
      car.shapeColor="red"
    }
  }
  drawSprites();
}