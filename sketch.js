var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3,gameObject4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 50, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,350,50,50);
  movingRect.shapeColor = "green";
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject1.debug=true;
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject2.debug=true;
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(255,255,255);  
  gameObject1.x = World.mouseX;
  gameObject1.y = World.mouseY;
  //console.log(movingRect.x - fixedRect.x);


  if(isTouching(gameObject2,gameObject1)){
    text("Touching",200,200);

  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";

  }
  var x_dis =gameObject1.x-gameObject2.x;
  var w_dis =gameObject1.width/2+gameObject2.width/2

  console.log("X_ distance : "+ x_dis);
  console.log("W_ distance : "+ w_dis);

  //bounceOff(fixedRect, movingRect);


  drawSprites();
  
 
}

