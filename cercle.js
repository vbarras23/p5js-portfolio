let x = 100;
let speed = 3;
let circleSize = 50;
let r, g, b;

function setup() {
  createCanvas(400, 200);
  changeColor(); 
}

function draw() {
  background(20);


  if (speed > 0) {
    circleSize = 50;
  } else {
    circleSize = 30;
  }


  fill(r, g, b);
  noStroke();
  ellipse(x, height / 2, circleSize, circleSize);


  x += speed;

  if (x > width - circleSize / 2 || x < circleSize / 2) {
    speed *= -1;
    changeColor();
  }
}


function changeColor() {
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
}