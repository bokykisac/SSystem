var video;
var button;
var snapshots = [];

function setup() {
 createCanvas(800, 240);
 background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
 button = createButton('SNAP');
 button.mousePressed(takeSnap);
}

function takeSnap() {
 snapshots.push(video.get());
 //image(video,0,0);
}


function draw() {
 var w = 80;
 var h = 60;
 var x = 0;
 var y = 0;
 for (var i = 0; i < snapshots.length; i++) {
  tint(255,50);
  image(snapshots[i], x, y,w,h);
  x = x + w;
 }
}