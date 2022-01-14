// SETUP:

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const navLen = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - navLen;

let mouse = {
	x: undefined,
	y: undefined
};

// VARIABLES:

let colourArray = ['#ee6c4d', '#e0fbfc', '#98c1d9', '#3d5a80'];
let hovering = true;
let gravity = 1;
let yFriction = 0.75;
let xFriction = 0.75;

// EVENT LISTENERS:

window.addEventListener("mousemove", function(e) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

window.addEventListener("resize", function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - navLen;

	//init();  uncomment to have initial drop reset every time site is resized
});

// window.addEventListener("click", function() {		// will possibly use later for cool effects
// 	hovering = false;
// });

// HELPER FUNCTIONS:

function randomIntInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColour(colours) {
	return colours[Math.floor(Math.random() * colours.length)];
}

// CIRCLE FUNCTIONS:

function Ball(x, y, velX, velY, radius, colour) {
	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velY = velY;
	this.radius = radius;
	this.colour = colour;

	this.update = function() {

		// if (!hovering) {

		if (this.y + this.radius + this.velY > canvas.height) {
			this.velY = -this.velY * yFriction;
		} else {
			this.velY += gravity;
		}

		if (this.x + this.radius + this.velX > canvas.width || 
			this.x - this.radius <= 0) {
			this.velX = -this.velX * xFriction;
		}

		//hover over to bounce the balls
		if (mouse.x > (this.x - this.radius) && mouse.x < (this.x + this.radius) && mouse.y > (this.y - this.radius) && mouse.y < (this.y + this.radius)) {
			this.velX = randomIntInRange(-20, 20);
			this.velY = -30;
		}

		// } else {

		//     if (this.x + this.radius * 2 + this.velX > canvas.width ||
		//        this.x - this.radius <= 0
		//     ) {
		//       this.velX = -this.velY;
		//     }

		//     if (
		//       this.y + this.radius * 2 + this.velY >= canvas.height ||
		//       this.y - this.radius <= 0
		//     ) {
		//       this.velY = -this.velY;
		//     }

		// 	// hover over to drop the balls
		// 	// if (mouse.x > (this.x - this.radius) && mouse.x < (this.x + this.radius) && mouse.y > (this.y - this.radius) && mouse.y < (this.y + this.radius)) {
		// 	// 	this.hovering = false;
		// 	// 	this.velX = randomIntInRange(-10, 10);
		// 	// 	this.velY = -10;
		// 	// }
		// }

	    this.x += this.velX;
	    this.y += this.velY;

		this.draw();
	};

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.colour;
		c.fill();
		c.strok
		c.closePath();
	};
}

// MAIN PROGRAM:

var ball;
var ballArray = [];

function init() {
	ballArray = [];
	for (let i = 0; i < 100; i++) {
		let radius = randomIntInRange(10, 60);
		let x = randomIntInRange(radius, canvas.width - radius);
		let y = randomIntInRange(0, canvas.height - radius);
		let velX = (Math.random() - 0.5) * 1;
		let velY = (Math.random() - 0.5) * 1;
		let colour = randomColour(colourArray);
		ballArray.push(new Ball(x, y, velX, velY, radius, colour));
	}	
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < ballArray.length; i++) {
		ballArray[i].update();
	}
}

init();
animate();
