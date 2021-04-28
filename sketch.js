var bg,bg2,form,system,code,security;
var score = 0;
var treasure,treasureImage;

function preload() {
  bg= loadImage("aladdin_cave.jpg");
  bg2 = loadImage("aladdin_cave2.jpg");
  treasureImage = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();

  treasure = createSprite(200,350,10,10);
  treasure.addImage(treasureImage);
  treasure.scale = 0.3;
  treasure.visible = false;
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  // add code for changing the background to the treasure background

  if(score === 3) {
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
    treasure.visible = true;
  }

  drawSprites();
}