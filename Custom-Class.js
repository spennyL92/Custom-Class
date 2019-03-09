let flakes = [];

function setup() {
  createCanvas(600, 400);
	
}

function mousePressed(){		
	
	for (let i = 0; i < 100; i++){
		let x = 1 + 10 * i;
		flakes[i] = new Snow(x, 0, 5, 5);
	}		
}


function draw() {
  background(0);
	
	for (let i = 0; i < flakes.length; i++){
	flakes[i].move();
	flakes[i].show();
	}	
}

class Snow {
	
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.w = width;
		this.h = height;
	}
	
	
	show(){
	stroke(255);
	strokeWeight(4);
	noFill(); 
	rect(this.x, this.y, this.w*2, this.h*2);
	}

	move(){
	this.y = this.y +random(5);
	}		
}


	