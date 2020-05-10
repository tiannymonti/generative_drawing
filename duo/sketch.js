let fromX, fromY;
let toX, toY;
let step = 2.5;


function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('sketch-holder');
  background(0, 20, 80);
}

function draw() {
  // draw background that fades stars slowly
  background(0, 20, 80, 1);
	
	if (random() > 0.9) {
		stroke(255);
		point(random(width), random(height));
	}
	
  // draw stars
	if (random() > 0.95 && step >= 2.5) {
		fromX = random(width);
		fromY = random(height/2);
		toX = random(fromX+10, width);
		toY = random(fromY+10, height/2);
		step = 0;
	}
}

function drawChart() {
  const drawingCanvas = document.getElementById('canvas2');
  const rc = rough.canvas(drawingCanvas);

  for (let index = 0; index < 21; index++) {
	let xCircle = genRandom(0,800);
	let yCircle = genRandom(0, 600);
	rc.circle(xCircle, yCircle, 60, { roughness: 3.5, fill: 'black', fillStyle: 'cross-hatch', strokeWidth: 2});
	
	rc.circle(xCircle-8, yCircle-4, 18, { roughness: 0, fill: 'white', fillStyle: 'solid'});
	rc.circle(xCircle-8, yCircle-5, 6, { roughness: 0, fill: 'black', fillStyle: 'solid'});
	
	rc.circle(xCircle+16, yCircle-4, 18, { roughness: 0, fill: 'white', fillStyle: 'solid'});
	rc.circle(xCircle+16, yCircle-5, 6, { roughness: 0, fill: 'black', fillStyle: 'solid'});	 
	
	rc.line(xCircle-4, yCircle+30, xCircle-4, yCircle+54, { roughness: 2, stroke: 'black', strokeWidth: 2, fillStyle: 'solid'});
	rc.line(xCircle+8, yCircle+30, xCircle+8, yCircle+54, { roughness: 2, stroke: 'black', strokeWidth: 2, fillStyle: 'solid'});

	rc.line(xCircle-30, yCircle, xCircle+3, yCircle-24, { roughness: 2, stroke: 'black', strokeWidth: 2, fillStyle: 'solid'});
	rc.line(xCircle+30, yCircle, xCircle+36, yCircle-24, { roughness: 2, stroke: 'black', strokeWidth: 2, fillStyle: 'solid'}); 
  }

  for (let index = 0; index < 30; index++) {
	let sp = genRandom(0,800);
	let spY = genRandom(0,600);
	const colors = ["#F6F786", "#F786F6", "#60ec08", "#f4e8f4"];
	let chosenColor = colors[genRandom(0,3)]
	rc.polygon([[sp, spY+10], [sp+6, spY+10], [sp+12, spY+20], [sp+18, spY+10], [sp+24, spY+10], [sp+18, spY], [sp+24, spY-10], [sp+18, spY-10], [sp+12, spY-20], [sp+6, spY-10], [sp, spY-10], [sp+6, spY]], { roughness: 1.5, fill: chosenColor, fillStyle: 'solid', strokeWidth: 2});
  }
  
  
}

function genRandom (a, b){
	return Math.floor(Math.random()*(b-a+1))+a;	
}


window.onload = drawChart;
