var osc;
var playing = true;
var upperfreq = 523; //Freq of C above middle C
var lowerfreq = 300; //Freq of C below middle C
var width;
var height;
var origin;

function setup() {
	width = window.innerWidth;
	height = window.innerHeight;
	origin = createVector(width/2, height/2);
	backgroundColor = color(150);
	createCanvas(width, height);
	textAlign(CENTER);

	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(lowerfreq);
	osc.amp(0.5, 0.05);
	osc.start();
}

function draw() {
	background(backgroundColor);
	fill(255);
	ellipse(origin.x, origin.y, 20, 20);
	xdiff = mouseX - origin.x;
	ydiff = mouseY - origin.y;
	print(xdiff, ydiff);
	
	
	angle = atan2(xdiff, ydiff);
	newfreq = lowerfreq + ((angle/(2*PI)) * abs(upperfreq - lowerfreq));
	osc.freq(newfreq);
}

function mouseClicked() {
    if (!playing) {
      // ramp amplitude to 0.5 over 0.1 seconds
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(150);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
      backgroundColor = color(0);
    }
  }