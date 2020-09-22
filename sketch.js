var score = 0;
var count = 0;
var space;
var galaxianGroup, galaxian1Group, galaxian2Group, galaxian3Group;
var bulletGroup;
var storyImg;

var alien,alienImg;

var spaceImg,playerImg;
var enemyImg,enemyImg2,enemyImg3,enemyImg4;

var createGalaxian,createGalaxian1,createGalaxian2,createGalaxian3;

var burstImg, bulletImg;

var laserImg;
var laserImg2;
var laserImg3;
var laserImg4;

function preload(){
  spaceImg=loadImage("images/bg.jpg");
  playerImg=loadImage("images/player.png");

  storyImg=loadImage("images/STORY.png");

  enemyImg=loadImage("images/download.png");
  enemyImg2=loadImage("images/enemy2.png");
  enemyImg3=loadImage("images/enemy3.png");
  enemyImg4=loadImage("images/enemy4.png");

  alienImg=loadImage("images/alien.png");

  laserImg=loadImage("images/laserblue.png");
  laserImg2=loadImage("images/laserred.png");
  laserImg3=loadImage("images/laseryellow.png");
  laserImg4=loadImage("images/lasergreen.png");

  burstImg=loadImage("images/burst.jpg");
  bulletImg=loadImage("images/bullet.png");

  hit=loadSound("sounds/shoot.wav");
  beep=loadSound("sounds/beep.mp3");
}


function setup(){
     space = createSprite(displayWidth/2-160,displayHeight/2+200);
     space.addImage(spaceImg);
     space.scale = 2.5;
     space.y = space.height/2;
     
     player = createSprite(190, 365,20,20);
     player.addImage(playerImg);
     player.scale=0.5;

     alienGroup=createGroup();
     //alien.addImage(alienImg);

     //LASER GROUPS
     
     laserGroup=createGroup();
     laserGroup2=createGroup();
     laserGroup3=createGroup();
     laserGroup4=createGroup();

     //GROUPS
     galaxianGroup = createGroup();
     galaxian1Group = createGroup();
     galaxian2Group = createGroup();
     galaxian3Group = createGroup();
     bulletGroup = createGroup();
     


     story=createSprite(200,200,20,20);
     story.addImage(storyImg);
     story.scale=0.3;
     story.visible=false;

     //enemyBulletGroup=createGroup();
}

function draw() {    
  //BACKGROUND COLOR AS BLACK
  background(0);


  count =count + Math.round(World.frameRate/60);
  player.x = World.mouseX;
  
  space.velocityY = 2;
  
  if (space.y > 500) {
    space.y = space.height/2;
  }
  
  if (keyDown("space")) 
  {
    createBullet(player.x);
    hit.play();
  }
  
  if (bulletGroup.isTouching(galaxianGroup)) 
  {
    galaxianGroup.destroyEach();
    bulletGroup.destroyEach();
    score = score + 2;
  }
   else if (bulletGroup.isTouching(galaxian1Group)) 
  
  {
    galaxian1Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 1;
  } 
  else if (bulletGroup.isTouching(galaxian2Group)) 

  {
    galaxian2Group.destroyEach();
    bulletGroup.destroyEach(); 
    score = score + 2;
  } 
  else if (bulletGroup.isTouching(galaxian3Group)) 
  {

    galaxian3Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 1;
  }

  if(laserGroup.isTouching(player))
  {
    laserGroup.destroyEach();
    score=score-2;
    beep.play();
  }
  if(laserGroup2.isTouching(player))
  {
    laserGroup2.destroyEach();
    score=score-1;
    beep.play();
  }
  if(laserGroup3.isTouching(player))
  {
    laserGroup3.destroyEach();
    score=score-3;
    beep.play();
  }
  if(laserGroup4.isTouching(player))
  {
    laserGroup4.destroyEach();
    score=score-2;
    beep.play();
  }


  //if(World.frameCount%150==0){
   // createAlien();
  //}
  //LASER APPEARANCE
  if(World.frameCount%80==0){
    createLaser();
  }
  if(World.frameCount%100==0){
    createLaser2();
  }
  if(World.frameCount%120==0){
    createLaser3();
  }
  if(World.frameCount%140==0){
    createLaser4();
  }
  
 var select_enemy = Math.round(random(0,3));
  
  if (World.frameCount %100 == 0)
    {
    if (select_enemy == 0) 
    {
       createGalaxian();
    } 
    else if (select_enemy == 1)
    {
      createGalaxian1();
    }
    else if (select_enemy == 2) 
    {
      createGalaxian2();
    }
     else if (select_enemy==3)
    {
      createGalaxian3();
    }
    
  }
  fill("green");
  drawSprites();
  text("ALIENS DESTROYED: "+ score, 10, 20);
  fill("yellow");
  text("DISTANCE COVERED: "+ count, 230, 20);
}


function createGalaxian() 
{
  galaxian = createSprite(Math.round(random(20, 380)), 0, 10, 10);
  galaxian.addImage(enemyImg);
  speed=Math.round(random(1,6));
  galaxian.velocityY = speed;
  galaxian.scale=0.6;
  galaxian.lifetime = 500;
  galaxianGroup.add(galaxian);
}

function createGalaxian1() {
  galaxian1 = createSprite(Math.round(random(20, 380)), 0, 10, 10);
  galaxian1.addImage(enemyImg2);
  galaxian1.scale=0.07;
  speed=Math.round(random(1,6));
  galaxian1.velocityY = speed;
  galaxian1.lifetime = 500;
  galaxian1Group.add(galaxian1);
}

function createGalaxian2() 
{
  galaxian2 = createSprite(Math.round(random(20, 380)), 0, 10, 10);
  galaxian2.addImage(enemyImg3);
  galaxian2.scale=0.5;
  speed=Math.round(random(1,6));
  galaxian2.velocityY = speed;
  galaxian2.lifetime = 500;
  galaxian2Group.add(galaxian2);
}

function createGalaxian3() {
  galaxian3=createSprite(Math.round(random(20,380)),0,10,10);
  galaxian3.scale=0.3;
  galaxian3.addImage(enemyImg4);
  speed=Math.round(random(1,6));
  galaxian3.velocityY =speed;
  galaxian3.lifetime =500;
  galaxian3Group.add(galaxian3);
}

function createBullet(x) {
  var bullet= createSprite(100, 100, 5, 10);
  bullet.y = 330;
  bullet.x = x;                                           
  bullet.addImage(bulletImg);
  bullet.scale=0.3;
  bullet.velocityY = -35;
  bullet.lifetime = 500;
  bulletGroup.add(bullet);
}

//function createAlien(){
  //alien=createSprite(0,Math.round(random(40,360)),10,10);
  //alien.addImage(alienImg);
  //speed=Math.round(random(5,15));
  //alien.scale=0.6;
  //alien.velocityX=speed;
  //alien.lifetime=500;
  //alienGroup.add(alien);
  //}

function createLaser(){
  laser=createSprite(Math.round(random(20,200)),0,10,10);
  laser.scale=0.6;
  laser.addImage(laserImg);
  speed=Math.round(random(10,20));
  laser.velocityY =speed;
  laser.lifetime =500;
  laserGroup.add(laser);
}

function createLaser2(){
  laser=createSprite(Math.round(random(200,380)),0,10,10);
  laser.scale=0.6;
  laser.addImage(laserImg2);
  speed=Math.round(random(10,20));
  laser.velocityY =speed;
  laser.lifetime =500;
  laserGroup2.add(laser);
}

function createLaser3(){
  laser=createSprite(Math.round(random(150,330)),0,10,10);
  laser.scale=0.6;
  laser.addImage(laserImg3);
  speed=Math.round(random(10,20));
  laser.velocityY =speed;
  laser.lifetime =500;
  laserGroup3.add(laser);
}
function createLaser4(){
  laser=createSprite(Math.round(random(20,380)),0,10,10);
  laser.scale=0.6;
  laser.addImage(laserImg4);
  speed=Math.round(random(10,20));
  laser.velocityY =speed;
  laser.lifetime =500;
  laserGroup4.add(laser);
}