const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function setup() {
  createCanvas(640, 480);
  angleMode(DEGREES);
  
  c1 = color(255, 255, 255);
  c2 = color(255, 204, 255);
  setGradient(0, 0, width, height, c1, c2, X_AXIS);
  
  
  for (let i = 0; i < 900; i++) {
    fill(random(255), random(0), random(255), randomGaussian(100, 55)+155);
    noStroke();
    ellipse(random(windowWidth), random(windowHeight), random(70));
  }

  //noLoop();
}

function draw() {
  rotate(45);
  translate(randomGaussian(420, 40), randomGaussian(-360, 100));
  stroke(color(random(255),0,random(255)));
  line(0,random(150),0,0);
}

function mousePressed() {
  noLoop();
}

