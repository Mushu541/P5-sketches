let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    let b = new Bubble();
    bubbles.push(b);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(150);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].rollOver();
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].mouseOver(mouseX, mouseY);
  }
}

function mousePressed() {
  for (let i = bubbles.length - 1; i > 0; i--) {
    if (bubbles[i].mouseOn) {
      bubbles.splice(i, 1);
    }
  }
}




class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(20, 50);
    this.brightness = 200;
    this.mouseOn = false;
  }
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y - 3;
    if (this.x > width) {
      this.x = 0;
    }
    if (this.y < -this.r) {
      this.y = height + this.r;
    }
  }

  show() {
    fill(this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }

  clicked() {
    if (this.mouseOn) {
      print("clicked");
    }
  }

  mouseOver(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.mouseOn = true;
    } else {
      this.mouseOn = false;
    }
  }
  rollOver(){
    if (this.mouseOn) {
      this.brightness = 255;
    } else {this.brightness = 200;}
  }
}
