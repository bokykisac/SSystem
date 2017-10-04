var mic;
var vid;
var snaps = [];



function setup() {

 var p1 = createP('Scream to take a snap');
 p1.style("font-size", "30px");
 p1.position(0, -30);

 var p2 = createP('SNAP');
 var p3 = createP('START');
 var p4 = createP('Your snaps');

 p2.position(75, 43);
 p3.position(75, 243);
 p4.position(350, 355);
 p4.style("font-size","20px");

 createCanvas(800, 600);
 mic = new p5.AudioIn();
 mic.start();
 vid = createCapture(VIDEO);
 vid.size(320, 240);
 vid.position(480, 0);
}

function draw() {
 vid.loadPixels();
 background(200);
 // VOLUME
 var mvol = mic.getLevel();
 var mheight = map(mvol, 0, 0.6, 0, 200);
 noStroke();
 var gcol = map(mvol, 0, 0.60, 255, 0);
 var rcol = map(mvol, 0, 0.60, 50, 255);
 fill(rcol, gcol, 0);
 strokeWeight(1);
 stroke(51);
 rect(10, 270, 40, -mheight);
 //VOLUME

 // LINES
 stroke(51);
 strokeWeight(2);
 line(0,598,width,598);
 line(0,398,width,398);
 line(5, 270, 55, 270);
 line(5, 70, 55, 70);
 stroke(151);
 line(10, 170, 50, 170);
 var yl = 250;
 // LINES

 for (var i = 0; i < 9; i++) {
  line(15, yl, 45, yl);
  yl -= 20;
 }

 if (-mheight < -200) {

  snaps.push(vid.get());
 }

 var xv = 0;

 for (var j = 0; j < snaps.length; j++) {
  image(snaps[j], xv, 400, 200, 200);
  xv += 200;
  if (snaps.length > 4) {
   snaps.splice(0, 1);
  }
 }

}