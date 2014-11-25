var song, analyzer;
var xoff = 0.0;
var xincrement = 0.01;



function preload() {
  song = loadSound('sound.mp3');
}

function setup() {
  createCanvas(window.innerWidth,500);
  frameRate(30);
  background(0);
  noStroke();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);

  x = width / 2;
  y = height;
  lerp()

}


function draw() {

  // Get the overall volume (between 0 and 1.0)
  var vol = analyzer.getLevel();


  var n  = random(0,width);

  // With each cycle, increment xoff
  xoff += xincrement;

  // Draw an ellipse with size based on volume
  fill(0, 10);
  rect(0,0,width,height);

  for (var i = 0; i < 7; i ++) {
  star(n+(random(10,90)), (i*random(10,700))+10, 2+vol*300, 70+vol*200, 200);

  }
}



function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();

  } else {
    song.play();
  }
}


function star(x, y, radius1, radius2, npoints) {
  fill(255,250,140);

  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
