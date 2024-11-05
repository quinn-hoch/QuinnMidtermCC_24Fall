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
let redup = 255; 

let cracksuper = []; 
let thick = 10; 
let click = 0; 

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
    g += .5;
  }
  //random grains of sand ?? or green screen (grass) that becomes grains of sand
}
//begin scene 3
if(frameCount > 2000){
  // let crack1a = random(0, height); //0
  // let crack1b = random(1, height); 
  // let crack1x = random(1, width);
  // cracksuper.push(crack1a); 
  // cracksuper.push(crack1b); 
  // cracksuper.push(crack1x); 
  //line(0, cracksuper[0], cracksuper[1], cracksuper[2]);
  //mousePressed()
  //outermost cracks:
  strokeWeight(2); //thick - click
  stroke(0);
  //first
  line(0, cracksuper[0], cracksuper[1], cracksuper[2]); //left
  line(width, cracksuper[3], cracksuper[4], cracksuper[5]); //right
  line(cracksuper[6], 0, cracksuper[7], cracksuper[8]); //top
  line(cracksuper[9], height, cracksuper[10], cracksuper[11]); //bottom
  }//second
  if(frameCount > 1950){
  //strokeWeight(2);
  line(cracksuper[1], cracksuper[2], cracksuper[12], cracksuper[13]);
  line(cracksuper[1], cracksuper[2], cracksuper[14], cracksuper[15]);

  line(cracksuper[4], cracksuper[5], cracksuper[16], cracksuper[17]);
  line(cracksuper[4], cracksuper[5], cracksuper[18], cracksuper[19]);

  line(cracksuper[7], cracksuper[8], cracksuper[20], cracksuper[21]);
  line(cracksuper[7], cracksuper[8], cracksuper[22], cracksuper[23]);

  line(cracksuper[10], cracksuper[11], cracksuper[24], cracksuper[25]);

  //crack();
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
  if(click = 0){
  //left crack
  let crack1ay = random(0, height); 
  let crack1x = random(1, width/4); 
  let crack1by = random(1, height);
  cracksuper.push(crack1ay); //[0]
  cracksuper.push(crack1x); //[1]
  cracksuper.push(crack1by); //[2]
  //right crack
  let crack2ay = random(0, height);
  let crack2x = random((width - width/4), width); 
  let crack2by = random(1, height);
  cracksuper.push(crack2ay); //[3]
  cracksuper.push(crack2x); //[4]
  cracksuper.push(crack2by); //[5]
  //top crack
  let crack1ax = random(0, width); 
  let crack1y = random(1, height/4); 
  let crack1bx = random(1, width);
  cracksuper.push(crack1ax); //[6]
  cracksuper.push(crack1bx); //[7]
  cracksuper.push(crack1y); //[8]
  //bottom crack
  let crack2ax = random(0, width); 
  let crack2y = random((height - height/4), height); 
  let crack2bx = random(1, width);
  cracksuper.push(crack2ax); //[9]
  cracksuper.push(crack2bx); //[10]
  cracksuper.push(crack2y); //[11]
}
if(click = 2){
  //left crack
  let crack3ay = random(0, height); 
  let crack3ax = random(1, width/3); 
  cracksuper.push(crack3ay); //[12]
  cracksuper.push(crack3ax); //[13]

  let crack3by = random(0, height); 
  let crack3bx = random(1, width/3); 
  cracksuper.push(crack3by); //[14]
  cracksuper.push(crack3bx); //[15]

  //right crack
  let crack4ay = random(0, height); 
  let crack4ax = random((width - width/3), width); 
  cracksuper.push(crack4ay); //[16]
  cracksuper.push(crack4ax); //[17]

  let crack4by = random(0, height); 
  let crack4bx = random((width - width/3), width); 
  cracksuper.push(crack4by); //[18]
  cracksuper.push(crack4bx); //[19]

  //top crack
  let crack5ax = random(0, width); 
  let crack5ay = random(1, height/3); 
  cracksuper.push(crack5ax); //[20]
  cracksuper.push(crack5ay); //[21]

  let crack5bx = random(0, width); 
  let crack5by = random(1, height/3); 
  cracksuper.push(crack5bx); //[22]
  cracksuper.push(crack5by); //[23]

  //bottom crack
  let crack6ax = random(0, width);
  let crack6ay = random((height - height/3), height); 
  cracksuper.push(crack6ax); //[24]
  cracksuper.push(crack6ay); //[25]

  let crack6bx = random(0, width);
  let crack6by = random((height - height/3), height); 
  cracksuper.push(crack6bx); //[24]
  cracksuper.push(crack6by); //[25]
}
  click += 1;
  //crack(mouseX, mouseY);
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

