var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto;
var sun,moon,spaceship;   
var quiz,score;
var gameState = "one";
function preload() {
   sun1 = loadImage("images/sun.png");
   moon1 = loadImage("images/moon.png");
   mercury1 = loadImage("images/mercury.png");
   venus1 = loadImage("images/venus.png");
   earth1 = loadImage("images/earth.png");
   mars1 = loadImage("images/mars.png");
   jupiter1 = loadImage("images/jupiter.png");
   saturn1 = loadImage("images/saturn.png");
   uranus1 = loadImage("images/uranus.png");
   neptune1 = loadImage("images/neptune.png");
   pluto1 = loadImage("images/pluto.png");
 
  
  
}

function setup() {
  createCanvas(1300,600);
  state1();
 // quiz = new Quiz();

}

function draw() {
  background("black");
  if(gameState === "one"){
    // quiz.clues();
   // quiz.display();
   // textSize(15);
   // fill ("lightblue")
   //text("score : "+score, 500,50);
  }
   
  drawSprites();
}