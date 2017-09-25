var video;
var button;
var snapshots = [];

function setup() {
 createCanvas(800, 240);
 background(51);
 video = createCapture(VIDEO);
 video.size(320, 240);
 button = createButton('Snap');
 button.mousePressed(takeSnap);
 button.position(700,240);
 button.size(100,100);
}

function takeSnap(){
 video.loadPixels();
 snapshots.push(video.get());

}

function draw() {
 var w = 80;
 var h = 60;
 var x = 0;
 var y = 0;
 for (var i = 0; i < snapshots.length; i++) {
  image(snapshots[i], x, y, w, h);
  x = x + w;
  if (x >= width) {
   x = 0;
   y = y + h;
   if (y >= height){
    y = 0;
   }
  }
 }
}