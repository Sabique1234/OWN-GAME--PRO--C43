var score = 0;
var space;
var galaxianGroup, galaxian1Group, galaxian2Group, galaxian3Group;
var bulletGroup;

var spaceImg,playerImg;
var enemyImg,enemyImg2,enemyImg3,enemyImg4;

var createGalaxian,createGalaxian1,createGalaxian2,createGalaxian3;

var burstImg, bulletImg;


function preload(){
  spaceImg=loadImage("images/bg.jpg");
  playerImg=loadImage("images/player.png");

  enemyImg=loadImage("images/enemy.jpg");
  enemyImg2=loadImage("images/enemy2.png");
  enemyImg3=loadImage("images/enemy3.png");
  enemyImg4=loadImage("images/enemy4.png");

  burstImg=loadImage("images/burst.jpg");
  bulletImg=loadImage("images/bullet.png");
}


function setup(){
     space = createSprite(displayWidth/2-160,displayHeight/2+200);
     space.addImage(spaceImg);
     space.scale = 2.5;
     space.y = space.height/2;
     


     player = createSprite(190, 365,20,20);
     player.addImage(playerImg);
     player.scale=0.5;

     //GROUPS
     galaxianGroup = createGroup();
     galaxian1Group = createGroup();
     galaxian2Group = createGroup();
     galaxian3Group = createGroup();
     bulletGroup = createGroup();
     enemyBulletGroup=createGroup();
}

function draw() {    
  //BACKGROUND COLOR AS BLACK
  background(0);
  
  
  player.x = World.mouseX;
  
  space.velocityY = 2;
  
  if (space.y > 500) {
    space.y = space.height/2;
  }
  
  if (keyDown("space")) 
  {
    createBullet(player.x);
    createEnemyBullet(galaxianGroup.x);
  }
  
  if (bulletGroup.isTouching(galaxianGroup)) 
  {
    galaxianGroup.destroyEach();
    bulletGroup.destroyEach();
    enemyBulletGroup.destroyEach();
    score = score + 1;
  }
   else if (bulletGroup.isTouching(galaxian1Group)) 
  
  {
    galaxian1Group.destroyEach();
    bulletGroup.destroyEach();
    enemyBulletGroup.destroyEach();
    score = score + 1;
  } 
  else if (bulletGroup.isTouching(galaxian2Group)) 

  {
    
    galaxian2Group.destroyEach();
    bulletGroup.destroyEach(); 
    enemyBulletGroup.destroyEach();
    score = score + 1;
  } 
  else if (bulletGroup.isTouching(galaxian3Group)) 
  {

    galaxian3Group.destroyEach();
    bulletGroup.destroyEach();
    enemyBulletGroup.destroyEach();
    score = score + 1;
  }
  
 var select_enemy = Math.round(random(0,3));
  
  if (World.frameCount % 100 == 0)
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
  fill(255,255,255);
  drawSprites();
  text("ALIENS DESTROYED: "+ score, 10, 20);
}


function createGalaxian() 
{
  galaxian = createSprite(Math.round(random(20, 380)), 0, 10, 10);
  galaxian.addImage(enemyImg);
  galaxian.velocityY = 1.2;
  galaxian.scale=0.09;
  galaxian.lifetime = 500;
  galaxianGroup.add(galaxian);
}

function createGalaxian1() {
  galaxian1 = createSprite(Math.round(random(20, 380)), 0, 10, 10);
  galaxian1.addImage(enemyImg2);
  galaxian1.scale=0.09;
  galaxian1.velocityY = 2;
  galaxian1.lifetime = 500;
  galaxian1Group.add(galaxian1);
}

function createGalaxian2() 
{
  galaxian2 = createSprite(Math.round(random(20, 380)), 0, 10, 10);
  galaxian2.addImage(enemyImg3);
  galaxian2.scale=0.5;
  galaxian2.velocityY = 3;
  galaxian2.lifetime = 500;
  galaxian2Group.add(galaxian2);
}

function createGalaxian3() {
  galaxian3=createSprite(Math.round(random(20,380)),0,10,10);
  galaxian3.scale=0.5;
  galaxian3.addImage(enemyImg4);
  galaxian3.velocityY =4;
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


function createEnemyBullet(x){
  var bullet=createSprite(300,300,5,10);
  bullet.y=200;
  bullet.x=x;
  bullet.velocityY=20;
  enemyBulletGroup.add(bullet);

}


