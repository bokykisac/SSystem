var img;
var mX = 6.87;
var mY = 5;
var mx2;
var my2;
var mpressedX;
var mpressedY;
var slider;
var dropzone;
var bgimg;

function setup(){
	cnv = createCanvas(window.innerWidth,window.innerHeight,WEBGL);

	var text1 = select('#text1');
	text1.position(20,-20);
	var text2 = select('#text2');
	text2.position(20,25);
	var text3 = select('#text3');
	text3.position(20,70);
	var stext = select('#stext');
	stext.position(170,130);


	slider = createSlider(50,400,200);
	slider.position(25,155);

}

function draw(){
	background(255);
	texture(bgimg);
	plane(window.innerWidth,window.innerHeight);

	if(mouseIsPressed){
		rotiraj_mis();
	}else if (keyPressed()){
		rotiraj_samo();
	}else{
		miruje();
	}

}

function rotiraj_mis(){
		push();
	  	rotateX(my2 + (mouseY - mpressedY)*0.01);
	  	rotateY(mx2 + (mouseX - mpressedX)*0.01);
			mY = my2 +(mouseY - mpressedY)*0.01;
			mX = mx2 + (mouseX - mpressedX)*0.01;
			texture(img);
			sphere(slider.value(),60,50);
	   pop();
}

function rotiraj_samo(){
		push();
	  	rotateX(frameCount * 0.01);
			rotateZ(frameCount * 0.01);
	  	rotateY(frameCount * 0.01);
			texture(img);
			sphere(slider.value(),60,50);
	   pop();

}

function miruje(){
	push()
		rotateX(mY);
		rotateY(mX);
		mx2 = mX;
		my2 = mY;
		texture(img);
		sphere(slider.value(),60,50);
	pop();
}

function keyPressed(){
	if(keyCode == ENTER){
		return true;
	}else if (keyCode == BACKSPACE){
		miruje()
	}else{
		return false;
	}
}

function  mousePressed(){
	mpressedX = mouseX;
	mpressedY = mouseY;
}

function preload(){
	img = loadImage("images/ovo.jpg");
	bgimg = loadImage("images/svemirko.jpg");
}
