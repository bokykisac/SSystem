var angle1 = 0;
var angle2 = 0;
var angle3 = 0;
var angle4 = 0

function setup() {
 createCanvas(600, 600);
 ellipseMode(CENTER);

}

function draw() {
 background(0);
 
 push();
 
 translate(width/2, height/2);
 fill(255,200,0);
 ellipse(0,0,100,100);
 
 noFill();
 stroke(255,50);
 ellipse(0,0,180,180);
 ellipse(0,0,250,250);
 ellipse(0,0,320,320);
 
 // MERCURY
 rotate(angle1);
 fill(0,150,200);
 noStroke();
 ellipse(0,90,15,15);
 
 pop();
  
 push();
 // VENUS
 translate(width/2, height/2);
 rotate(angle2)
 fill(200,200,250);
 noStroke();
 ellipse(0,125,18,18);
 
 pop();
 
 // EARTH
 push();
 
 translate(width/2, height/2);
 rotate(angle3)
 fill(0,250,170);
 noStroke();
 ellipse(0,160,24,24);
 translate(0,160);
 fill(255);
 rotate(-angle4)
 ellipse(0,18,7,7);
 
 pop();
 


 
 
 angle1 = angle1 + 0.01;
 angle2 = angle2 + 0.009;
 angle3 = angle3 + 0.008;
 angle4 = angle4 + 0.03;

}