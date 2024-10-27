//MIDTERM ----- DRY
//ideas: 
//booleans!
//1- water going down
//2- green screen (grass) (30, 176, 40); turns brown/tan -- dries up
//3- cracks on brown/tan screen -- cracked ground -- appearing over time
//4- particles react to where mouse is so if mouse is pressed it looks like the area is falling apart?

let water;

let r = 30;
let b = 176; 
let g = 40; 

let sy = 0;
let sx = 0; 

let wx = 0; 
let wy = 0;
let targetX; 
let targetY;
let angle = 0; 
let sizex = 0; 
let sizey = 0;

function setup() {
createCanvas(900, 900);
background(224, 194, 140); //beige //water color: (#68DBEA)(73, 218, 225)
water = new Wave(900, 500);
angleMode(DEGREES);
targetX = width / 2; 
targetY = height / 2; 
}

function draw() {
//water but its going down ie. drying
  //if(click == 0){
//further: 
  //could potentially add waves by adding a shape that moves across the screen on top of the line
    
    stroke(224, 194, 140);
    strokeWeight(10);
    //background(224, 194, 140);
    water.drop(0.75);
    water.display();
    fill(255, 255, 0);
    stroke(255, 126, 0);
    ellipseMode(CENTER);
     ellipse(0, 0, 200, 200); 
    if(frameCount > 500){ //|| frameCount < 1600)
    //if(water.drop(this.y) == 0){
      wx += (targetX - wx) * 0.01;
      wy += (targetY - wy) * 0.01;
background(224, 194, 140);
      angle += 0.05;
      sizex += 1;
      sizey += 1; 
      translate(wx, wy);
      rotate(angle);
      ellipse(0, 0, 200 + sizex, 200 + sizey);
    }
  //   resetMatrix();
//extra testers:
  //rect(0, w, width, w);
  //   if(w > 0){
  //     w -= 1;
  // rect(0, y, width, y);
  // y = y + speed; 
  //   if(y > height){
  //     y = 0;

   //}
 // }

  //random grains of sand ?? or green screen (grass) that becomes grains of sand

  // background(r, b, g);
  // if(r < 218){
  
  //   grass(100, 100); //1
  //   grass(200, 80); //2
  //   grass(800, 600); //3
  //   grass(720, 530); //4
  //   grass(500, 200); //5
  //   grass(400, 370); //6
  //   grass(300, 700); //7
  //   grass(230, 500); //8 
  //   grass(607, 400); //9
  //   grass(470, 800); //10
  //   r += 1;
  // }
  // if(r == 218 && g < 100){
  //   //b += 1;
  //   g += 1;
  // }

//extra testers: 
  //   for(let q = 100; q < 900; q += 50){
  //   grass(random(100, 900), random(100, 900));
  // }

  //if(click == 1){

  //}
  // dry cracking thing
  //consider cracks through interaction?
  //if(click == 2){

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

// if(mousePressed()){
//  //ellipse(mouseX, mouseY, 10, 10);
//   if(click < 2){
//   click += 1; 
// } else{ 
// click === 0; 
// }

// }

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
    //if(this.y > height){
      //this.y = 0;
    //}

  }
}


function grass(bladex, bladey){
  stroke(46, 122, 45); 
  strokeWeight(4);
  line(bladex, bladey, bladex + 10, bladey + 20);
  line(bladex + 15, bladey - 5, bladex + 15, bladey + 15); 
  line(bladex + 30, bladey, bladex + 20, bladey + 20); 
}

function crack(sx, sy){
  stroke(82, 62, 42);
    strokeWeight(10);
    line(sx,sy, sx + 100, sy + 70); 
    line(sx + 100,sy + 70, sx +200, sy + 50);
    strokeWeight(5); 
    line(sx + 100,sy + 70, sx + 130, sy + 200);
    line(sx + 200, sy + 50, sx + 220, sy + 20);
    line(sx + 200, sy + 50, sx + 240, sy + 100);
}
