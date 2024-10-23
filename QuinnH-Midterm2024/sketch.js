//MIDTERM ----- DRY
let click = 0;
let y = 200;
let water;
function setup() {
createCanvas(900, 900);
background(224, 194, 140); //beige //water color: (#68DBEA)(73, 218, 225)
water = new WaveFall(900, 500);
}

function draw() {
//water but its going down ie. drying
  //if(click == 0){

    // stroke(224, 194, 140);
    // strokeWeight(10);
    // background(224, 194, 140);
    // water.drop(1);
    // water.display();

    //rect(0, w, width, w);
  //   if(w > 0){
  //     w -= 1;
  // rect(0, y, width, y);
  // y = y + speed; 
  //   if(y > height){
  //     y = 0;

   // }
    //could potentially add waves by adding a shape that moves across the screen on top of the line
 // }
  //random grains of sand ?? 
  //if(click == 1){

  //}
  // dry cracking thing
  //if(click == 2){
    stroke(0);
    strokeWeight(10);
    line(0,0, 100, 70);
    line(100,70, 200, 50);

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

class WaveFall{
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