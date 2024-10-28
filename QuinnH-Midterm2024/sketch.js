//MIDTERM ----- DRY
//ideas: 
//booleans!
//1- water going down
//2- green screen (grass) (30, 176, 40); turns brown/tan -- dries up
//3- cracks on brown/tan screen -- cracked ground -- appearing over time
//4- particles react to where mouse is so if mouse is pressed it looks like the area is falling apart?

let water;

let r = 30;
let b = 196; 
let g = 40; 

let angle = 0; 
let posX; 
let posY; 
let speed = 2;
let radius = 150; 
let spikeLength = 50;
let numSpikes = 16;

function setup() {

  createCanvas(800, 800);
  background(224, 194, 140);//beige //water color: (#68DBEA)(73, 218, 225)
  posX = 0;
  posY = 0;
  water = new Wave(900, 500);

}

function draw() {
  stroke(224, 194, 140);
  strokeWeight(10);
  water.drop(0.75);
  water.display();
    //could potentially add waves by adding a shape that moves across the screen on top of the line
  fill(255, 255, 0);
  stroke(255, 126, 0);
  strokeWeight(10);
  for (let i = 0; i < numSpikes; i++) {
    let angleOffset = map(i, 0, numSpikes, 0, TWO_PI);
    let xOuter = cos(angleOffset) * radius;
    let yOuter = sin(angleOffset) * radius;
    let xSpike = cos(angleOffset) * (radius + spikeLength);
    let ySpike = sin(angleOffset) * (radius + spikeLength);
    
    vertex(xOuter, yOuter); 
    vertex(xSpike, ySpike); 
  }
  
  endShape(CLOSE); 


  if(frameCount > 400){
  background(224, 194, 140);
  
  posX += speed;
  posY += speed; 

  if(posX == width/2  || posX == height/2){
    speed = 0;
  }

  radius += 0.5; 

  fill(255, 255, 0);
  stroke(255, 126, 0);
  strokeWeight(10);
  beginShape();
  
  for(let i = 0; i < numSpikes; i++){
    let angleOffset = map(i, 0, numSpikes, 0, TWO_PI) + angle; 
    
    let xOuter = posX + cos(angleOffset) * radius;
    let yOuter = posY + sin(angleOffset) * radius;

    let xSpike = posX + cos(angleOffset) * (radius + spikeLength);
    let ySpike = posY + sin(angleOffset) * (radius + spikeLength);

    
    vertex(xOuter, yOuter); 
    vertex(xSpike, ySpike); 
  }
  
  endShape(CLOSE); 

 
  angle += 0.01;
}
//begin scene 2
if(frameCount > 1100){
  background(r, b, g);
  if(r < 218){
  
    grass(100, 100); //1
    grass(200, 80); //2
    grass(800, 600); //3
    grass(720, 530); //4
    grass(500, 200); //5
    grass(400, 370); //6
    grass(300, 700); //7
    grass(230, 500); //8 
    grass(607, 400); //9
    grass(470, 800); //10
    r += 1;
  }
  if(r == 218 && g < 100){
    //b += 0.5;
    g += 1;
  }
  //random grains of sand ?? or green screen (grass) that becomes grains of sand
}
//begin scene 3
if(frameCount > 1600){
  mousePressed()
  crack(sx, sy);
}
//extra testers: 
  //   for(let q = 100; q < 900; q += 50){
  //   grass(random(100, 900), random(100, 900));
  // }

  //if(click == 1){

  //}
  // dry cracking thing
  //consider cracks through interaction?
  //if(click == 2){
// if(mousePressed()){
//   crack(0, 0);
//}
// crack(0, 0);
// if(frameCount > 100){
// rotate(random(0, PI));
// crack(300, 300); 
// //rotate(HALF_PI); 
// crack(700, 700);
// }
  //}
//opacity needs to slowly develop then add more cracks?
}

class Wave{
  constructor(x, y){
    this.x = x
    this.y = y
  }
  display(){
    //stroke(73, 218, 225);//water color: (#68DBEA)(73, 218, 225)
    fill(73, 218, 225);
    //strokeWeight(10);
    rect(0, this.y, width, this.y);
  }
  drop(speed){
    this.y = this.y + speed; 
  }
}

function grass(bladex, bladey){
  stroke(46, 122, 45); 
  strokeWeight(4);
  line(bladex, bladey, bladex + 10, bladey + 20);
  line(bladex + 15, bladey - 5, bladex + 15, bladey + 15); 
  line(bladex + 30, bladey, bladex + 20, bladey + 20); 
}

function mousePressed(){
  sx = mouseX;
  sy = mouseY;
  //crack(mouseX, mouseY);
}
function crack(sx, sy){
  stroke(82, 62, 42);
    strokeWeight(10);
    line(sx, sy, sx + 100, sy + 70); 
    line(sx + 100,sy + 70, sx +200, sy + 50);
    strokeWeight(5); 
    line(sx + 100,sy + 70, sx + 130, sy + 200);
    line(sx + 200, sy + 50, sx + 220, sy + 20);
    line(sx + 200, sy + 50, sx + 240, sy + 100);
}

