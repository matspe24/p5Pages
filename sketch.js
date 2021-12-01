let x = 0;
let y = 200;
let acceleration = 15;
let accelIncrease = false;
let xAccel = 5;

function setup() {
  createCanvas(400, 400)
}

function draw() {
background(100);
strokeWeight(0);
fill(Math.abs(acceleration)*15, 0, 0)
ellipse(x, y, 20, 20);
fill(0, 0, Math.abs(acceleration*15))
ellipse(x, 400-y, 20, 20);
  x += xAccel;
  if(x > 400 || x < 0){
    xAccel *= -1;
  }
  y = y - acceleration;
  if(acceleration < -15){
    accelIncrease = true;
  }
  if(acceleration > 15){
    accelIncrease = false;
  }
  if(accelIncrease) {
    acceleration++;
  } else {
    acceleration--;
  }
} 