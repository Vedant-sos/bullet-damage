var bullet,wall;
var thickness,speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 100, 20);
  //car.debug=true;
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=rgb(80,80,80);
  //wall.debug=true;
  weight=random(30,52);
  speed=random(223,321);
  bullet.velocityX=speed;
  
}

function draw() {
  background(0,0,0); 
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
  }
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<=10){
      wall.shapeColor=color(0,255,0);
    }
  
  drawSprites();
}