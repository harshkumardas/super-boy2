var mario, ground,tree,bg,brick1
var bgimage,marioimage,treeimage,brick1image,brick2image,brick3image,mariostop
var score=0
var gameOver,restart
var bg 
var PLAY=1
var END=0
var brickgroup;
var gamestate=PLAY
function preload(){

    mariostop=loadImage("pk.png")
    bgimage=loadImage("bg.jpg")
    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("restart.png");
    marioimage=loadAnimation("harsh kumar1.png","rk.png","pk.png")
    brick1image=loadImage("hr.png")

}
function setup(){

createCanvas(1500,800)
bg=createSprite(0,height/2)
bg.addImage (bgimage)
bg .scale=4
bg.velocityX=-2
// ground=createSprite(750,780,1500,20)
 //ground.x = ground.width /2;
 //ground.velocityX = -(6 + 3*score/100);
 
 //gameOver = createSprite(300,100);
 //gameOver.addImage(gameover1Img);
 

mario=createSprite(100,650,50,50)
mario.addAnimation("mariorunning",marioimage)
mario.scale=0.5



brickgroup= new Group();




}

function draw(){
background("white")
score = Math.round(World.frameCount/4);
textSize(30)
fill("black")
text("Score: "+ score, 1300, 200);



if(brickgroup.isTouching(mario)){
    gameOver = createSprite(700,400);
gameOver.addImage(gameOverImg);
restart = createSprite(700,500);
restart.addImage(restartImg);

    gamestate = END;
}

if(gamestate===PLAY){
 
}
if(gamestate===END){
    mario.changeAnimation("mariocollided",mariostop)
    brickgroup.setVelocityXEach(0)
}
if(bg.x<100){
    bg.x=bg.width/2
}
if (keyDown("left") && mario.x >= 50)
{ mario.x= mario.x- 12}

if (keyDown("right") && mario.x <= 1400)
{ mario.x= mario.x+ 12}

if (keyDown("up") && mario.y >= 50)
{ mario.y= mario.y- 12}

if (keyDown("down") && mario.y <= 700)
{ mario.y= mario.y+ 12} 


    
 




spawnobstacles();
drawSprites();
}

function spawnobstacles()
{
    if(frameCount%40===0){
        brick1=createSprite(1500,730,50,50)
        var rand=Math.round(random(0,770))
        brick1.y=rand
        brick1.velocityX=-5
        brick1.lifetime = 300;
        //brick1.scale= 0.2
        brick1.scale=0.4
        brick1.addImage(brick1image)
        brickgroup.add(brick1);
        brick1.debug=true
    }
}