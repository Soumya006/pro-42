var iss, spacecraft ,hasDocked;
hasDocked=false;
function preload(){
  issImg = loadImage("Docking-undocking/iss.png");
  spacebgImg = loadImage("Docking-undocking/spacebg.jpg");
  spacecraft1Img = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2Img = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3Img = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4Img = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(1400,700);
  iss=createSprite(600, 300, 50, 50);
  iss.addImage("iss",issImg);
  iss.scale=0.95;

  spacecraft=createSprite(535, 500, 50, 50);
  //spacecraft.addImage("scapecraft",spacecraft1Img);
  spacecraft.scale=0.20;


}

function draw() {
  background(spacebgImg);  

  if(!hasDocked){
    spacecraft.x = Math.round(random(spacecraft.x-1,spacecraft.x+1)) 
  
    if(keyDown("left")) {
      spacecraft.x -= 5
      spacecraft.addImage(spacecraft4Img)
      spacecraft.scale = 0.20
    } else if(keyDown("right")){
      spacecraft.x += 5
      spacecraft.addImage(spacecraft3Img)
      spacecraft.scale = 0.20
    } else if(keyDown("up")){
      spacecraft.y -= 5
      spacecraft.addImage(spacecraft2Img)
    } else if(keyDown("down")){
      spacecraft.addImage(spacecraft2Img)
      spacecraft.scale = 0.20
    }else{
      spacecraft.addImage(spacecraft1Img)
      spacecraft.scale = 0.2
    }
  }

  if(spacecraft.y<=(iss.y+80)&&spacecraft.x<=(iss.x-60)){
    hasDocked=true
    console.log(hasDocked)
    textSize(25);
    fill("yellow");
    text("Docking Successful!!",500,500)
  }

  drawSprites();
}