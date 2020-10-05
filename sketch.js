var fixedRect, movingRect;

function setup() {
  createCanvas(windowWidth,windowHeight);

  fixedRect = createSprite(100,300,60,50);
  fixedRect.shapeColor="green";
  fixedRect.debug = true;

  movingRect = createSprite(500,100,50,50);
  movingRect.shapeColor="green";
  movingRect.debug =true;

  movingRect.velocityX = -3;
  movingRect.velocityY = 2;
  fixedRect.velocityX = 5;
  fixedRect.velocityY = -6;


}

function draw() {
  background(0);  

 /* if(  movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
      
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }*/
push();
  if( movingRect.x >= width - movingRect.width/2  || movingRect.x  <= movingRect.width/2){
      movingRect.velocityX = -movingRect.velocityX;
    }

    if( fixedRect.x >= width - fixedRect.width/2  || fixedRect.x  <= fixedRect.width/2){
      fixedRect.velocityX = -fixedRect.velocityX;
    }

    if( movingRect.y >= height - movingRect.height/2  || movingRect.y  <= movingRect.height/2){
      movingRect.velocityY = -movingRect.velocityY;
    }

    if( fixedRect.y >= height - fixedRect.height/2  || fixedRect.y  <= fixedRect.height/2){
      fixedRect.velocityY = -fixedRect.velocityY;
    }
    pop();
      if(  movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.y <= movingRect.y-movingRect.height/2 && fixedRect.y >= movingRect.y+movingRect.height/2){

      movingRect.velocityX = movingRect.velocityX *(-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    
    }
     if(movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
      && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2
      && fixedRect.x >= movingRect.x-movingRect.width/2 && fixedRect.x <= movingRect.x+movingRect.width/2){

       
        movingRect.velocityY = movingRect.velocityY*(-1);
        fixedRect.velocityY = fixedRect.velocityY*(-1);

    }

console.log(movingRect.x-movingRect.width/2);
console.log(movingRect.x+movingRect.width/2);
console.log(fixedRect.x);

    

  drawSprites();
}