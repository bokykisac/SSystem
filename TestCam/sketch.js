var video;
var button;

function setup() {
  createCanvas(320,240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320,240);
  button = createButton('SNAP');
  button.mousePressed(takeSnap);
}

function takeSnap(){
 image(video,0,0,width,height);
}


function draw() {
  
}