var video;
var vScale = 16;
var slider;

var cols = 40;
var rows = 30;
var k = 3;
var l = 3;

var boxes = [];

function setup() {
 noCanvas();
 createCanvas(640, 480);
 video = createCapture(VIDEO);
 video.size(cols, rows);
 slider = createSlider(0, 255, 77);

 for (var y = 0; y < rows; y++) {
  for (var x = 0; x < cols; x++) {
   var box = createCheckbox();
   box.parent('mirror');
   boxes.push(box);
   box.position(k,l);
   k = k +20;
   if (k >= 800){
    k = 3;
    l = l + 20; 
   }
  }
  var linebreak = createSpan('<br/>');
  linebreak.parent('mirror');
 }
}

function draw() {

 video.loadPixels();
 loadPixels();

 for (var x = 0; x < video.width; x++) {
  for (var y = 0; y < video.height; y++) {
   var index = (x + y * video.width) * 4;
   var r = video.pixels[index + 0];
   var g = video.pixels[index + 1];
   var b = video.pixels[index + 2];


   var bright = (r + g + b) / 3;
   var threshold = slider.value();
   var checkindex = x + y * cols;

   if (bright > threshold) {
    boxes[checkindex].checked(false);
   } else {
    boxes[checkindex].checked(true);
   }

  }
 }
}