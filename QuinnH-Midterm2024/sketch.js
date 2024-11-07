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
let op = 300; 

let angle = 0; 
let posX; 
let posY; 
let speed = 2;
let radius = 150; 
let spikeLength = 50;
let numSpikes = 16;
let redup = 255; 

let cracks = []; 

function setup() {

  createCanvas(800, 800);
  background(224, 194, 140);//beige //water color: (#68DBEA)(73, 218, 225)
  posX = 0;
  posY = 0;
  water = new Wave(900, 500);

}

function draw() {
  //first scene
  stroke(224, 194, 140);
  strokeWeight(10);
  //line((0, random(0, height), random(0, width), random(0, height)); 
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

  fill(255, redup, 0);
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
  //while(frameCount > 1200){
  redup -= .2;
//}
}
//begin scene 3
if(frameCount > 1400){
  background(r, b, g);
  if(r < 218){
  
    grass(100, 100, op); //1
    grass(200, 80, op); //2
    grass(800, 600, op); //3
    grass(720, 530, op); //4
    grass(500, 200, op); //5
    grass(400, 370, op); //6
    grass(300, 700, op); //7
    grass(230, 500, op); //8 
    grass(607, 400, op); //9
    grass(470, 800, op); //10
    r += .3;
    op -= 1
  }
  if(r == 218 && g < 100){
    //b += 0.5;
    g += .5;
  }
  //random grains of sand ?? or green screen (grass) that becomes grains of sand
}
//begin scene 3
if(frameCount > 2000){
   for (let i = 0; i < cracks.length; i++) {
    stroke(82, 62, 42);
    strokeWeight(2);
    noFill();
    //left line
    beginShape();
    vertex(0, cracks[i].lefty);
    vertex(cracks[i].leftx2, cracks[i].lefty3);
    vertex(cracks[i].leftx3, cracks[i].lefty4);
    vertex(cracks[i].leftx, cracks[i].lefty2);
    //line(0, cracks[i].lefty, cracks[i].leftx, cracks[i].lefty2);
    endShape();
    //right line
    beginShape();
    vertex(width, cracks[i].righty);
    vertex(cracks[i].rightx3, cracks[i].righty2);
    vertex(cracks[i].rightx2,cracks[i].righty3);
    vertex(cracks[i].rightx,cracks[i].righty4);
    //(width, cracks[i].righty, cracks[i].rightx, cracks[i].righty2);
    endShape();
    //top line
    line(cracks[i].topx, 0, cracks[i].topy, cracks[i].topx2);
    //bottom line
    line(cracks[i].bottomx, height, cracks[i].bottomy, cracks[i].bottomx2);
  }}
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

function grass(bladex, bladey, op){
  stroke(46, 122, 45, op); 
  strokeWeight(4);
  line(bladex, bladey, bladex + 10, bladey + 20);
  line(bladex + 15, bladey - 5, bladex + 15, bladey + 15); 
  line(bladex + 30, bladey, bladex + 20, bladey + 20); 
}

function mousePressed() {
  let newCrack = {
    //left side crack
    lefty: random(0, height),
    leftx: random(1, width/2),
    lefty2: random(1, height), 
    lefty3: random(1, height),
    lefty4: random(1, height),
    leftx2: width/(random(3,6)),
    leftx3: width/(random(3,6)) + random(100, 200),

    //right side crack
    righty: random(0, height),
    rightx: random(width/2, width),
    righty2: random(1, height),
    righty3: random(1, height),
    righty4: random(1, height),
    rightx2: (width/2 - (width/(random(3,6)))),
    rightx3: width - ((width/(random(3,6))) + random(100, 200)),
    //top crack
    topx: random(0, width), 
    topy: random(1, height/2), 
    topx2: random(1, width),

    //bottom crack
    bottomx: random(0, width), 
    bottomy: random(height/2, height),
    bottomx2: random(1, width),
  }
  cracks.push(newCrack);
}

// function crack(){
//   stroke(82, 62, 42);
//   strokeWeight(10);
//   line(0, cracksuper[0], cracksuper[1], cracksuper[2]);
//     // line(sx, sy, sx + 100, sy + 70); 
//     // line(sx + 100,sy + 70, sx +200, sy + 50);
//     // strokeWeight(5); 
//     // line(sx + 100,sy + 70, sx + 130, sy + 200);
//     // line(sx + 200, sy + 50, sx + 220, sy + 20);
//     // line(sx + 200, sy + 50, sx + 240, sy + 100);
// }

