//to name all the variables
var play, bow1, balloon1Image, balloon2Image, balloon3Image, arrowImage;
var ground;
var bow, balloon1, balloon2, balloon3;
var score = 0;
var balloonGroup, arrowGroup;
var arrowGroup, balloonGroup;

function preload(){ 
  //to load the image of the background
  play = loadImage("background0.png");
  
  //to load the image of bow
  bow1 = loadImage("bow0.png");
  
  //to load the images of balloons
  balloon1Image = loadImage("blue_balloon0.png");
  balloon2Image = loadImage("green_balloon0.png");
  balloon3Image = loadImage("red_balloon0.png");
  
  //to load the image of arrows
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  //to create canvas
  createCanvas(600, 600);
  
  //to create the ground sprite
  ground = createSprite(0, 0, 600, 600);
  ground.addImage(play);
  
  //to give scale to the ground
  ground.scale = 2.5;
   
  //to create the bow sprite
  bow = createSprite(480, 540, 10, 10);
  bow.addImage(bow1);
  
  //to create different groups for balloons
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  arrowGroup = new Group();
}

function draw() {
  
  //to make the ground infinite
  if(ground.x < 0){
    ground.width/2;
  }
  
  //to create the arrow whenever space key is pressed
  if(keyDown("space")){
    createArrow();
  }
  
  
  //to give the Y position of the mouse to the Y position of the bow 
  bow.y = mouseY;
  
  //to make the balloons come randomly
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if(frameCount % 80 == 0){
   if(select_balloon == 1){
     balloon1();
   }
   
   else if(select_balloon == 2){
    balloon2(); 
   }
    
   else if(select_balloon == 3){
    balloon3(); 
   }
  }
  
   //to make all the balloons destroy when it touches the arrow
  if(arrowGroup.isTouching(blueB)){
    arrowGroup.destroyEach();
    blueB.destroyEach();
    score = score + 1;
  }
  
  
  if(arrowGroup.isTouching(greenB)){
    arrowGroup.destroyEach();
    greenB.destroyEach();
    score = score + 3;
  }
  
  
  if(arrowGroup.isTouching(redB)){
    arrowGroup.destroyEach();
    redB.destroyEach();
    score = score + 5;
  }  
 
  //to draw all the sprites
  drawSprites();
  
  //to display the score text
  textSize(20);
  fill("green");
  text("Score: " + score, 270, 30);
}

  //to create balloon1
function balloon1(){
  var balloon1 = createSprite(0, Math.round(random(100, 270)));
  balloon1.addImage(balloon1Image);
  
  //yo give velocityX to balloon1
  balloon1.velocityX = 3;
  
  //to give lifetime
  balloon1.lifetime = 150;
  
  //to give scale
  balloon1.scale = 0.1;
  
  //to add it to a group
  blueB.add(balloon1);
    }

//to make function for balloon2
function balloon2(){
  
  //to create balloon2
  var balloon2 = createSprite(0, Math.round(random(50, 270)));
  balloon2.addImage(balloon2Image);

  //to give velocityX
  balloon2.velocityX = 3;

  //to give lifetime
  balloon2.lifetime = 150;
 
  //to give scale
  balloon2.scale = 0.1;

  //to add it in a group
  greenB.add(balloon2);
    }

//to make function for balloon3
function balloon3(){
  
  //to create balloon3
  var balloon3 = createSprite(0, Math.round(random(70, 270)));
  balloon3.addImage(balloon3Image);
  
   //to give velocityX
  balloon3.velocityX = 3;
  
  //to give lifetime
  balloon3.lifetime = 150;
  
  //to give scale
  balloon3.scale = 0.1;
  
  //to add it in a group
  redB.add(balloon3);
    }

//to create a function
function createArrow() {
  
  //to create arrow sprite
    var arrow = createSprite(410, bow.y, 10, 10);
    arrow.addImage(arrowImage);
  
  //to give scale
    arrow.scale = 0.5;

  //to give velocityX
    arrow.velocityX = -4;
  
  //to give the y position 
    arrow.y = bow.y;
  
  //to add it in a group
    arrowGroup.add(arrow);
}


