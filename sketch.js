
var platform;
var platformGroup;
var obstaclesGroup;
var mario, wall, obstacle, flag;
var marioAnimation, groundAnimation, wallAnimation, obstacleAnimation, flagAnimation;
var PLAY = 1;
var LOSE = 0;
var WIN = 2;
var gameState = PLAY;

function preload()
{
  marioAnimation = loadAnimation("images/Capture1.png", "images/Capture3.png", "images/Capture4.png");
  groundAnimation = loadAnimation("images/ground.png");
  wallAnimation = loadAnimation("images/wall.png");
  obstacleAnimation = loadAnimation("images/obstacle1.png");
  flagAnimation = loadAnimation("images/Flag.png");
}

function setup() 
{
  createCanvas(displayWidth, 700);

  var distanceX = 0;
  var gap;

  platformGroup = new Group();
  obstaclesGroup = new Group();
  mario = new Player();
  mario.spt.debug = "true";
  mario.spt.setCollider("circle", )

  for(var i=0; i<30; i=i+1)
  {
    platform = new Platform(distanceX); 
    platformGroup.add(platform.spt);
    gap = random([50, 60, 70, 80]);
    distanceX = distanceX + platform.sptw + gap;

    if(i%3 === 0)
    {
      wall = new Wall(distanceX);
      platformGroup.add(wall.spt);
    }

    if(i%3 === 0)
    {
      obstacle = new Obstacle(distanceX);
      obstaclesGroup.add(obstacle.spt);
    }
  }
  flag = createSprite(distanceX - 200, height-370);
  flag.addAnimation("flag", flagAnimation);
  flag.scale = 0.1;
}

function draw() 
{
  background("skyblue"); 


  translate(-mario.spt.x + width/2, 0, 0); 

  if(gameState === PLAY)
  {
    mario.applyGravity();
    mario.spt.collide(platformGroup);
  
    if(keyDown("right"))
    {
      mario.moveForward();
    }
  
    if(keyDown("left"))
    {
      mario.moveBackward();
    }
  
    if(keyDown("up"))
    {
      mario.jump();
    } 
    if(obstaclesGroup.isTouching(mario.spt) || mario.spt.y>height)
    {
      gameState = LOSE;
    }
    if(flag.isTouching(mario.spt))
    {
      gameState = WIN;
    }
  }
  if(gameState === LOSE)
  {
    textSize(40);
    text("GAME OVER", mario.spt.x, 300);
    mario.spt.setVelocity(0, 0);
    mario.spt.pause();
    obstaclesGroup.destroyEach();

  }
  if(gameState === WIN)
  {
    textSize(40);
    text("WINNER", mario.spt.x, 300);
    mario.spt.setVelocity(0, 0);
    mario.spt.pause();
    obstaclesGroup.destroyEach();
  }

  drawSprites();
}

