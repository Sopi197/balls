
let canvasBall = document.getElementById("ball");
let contextBall = canvasBall.getContext("2d");

let circleBall = function(x, y, radius, fillCircle) {
    contextBall.beginPath();
    contextBall.arc(x, y, radius, 0, Math.PI*2, false);
    if (fillCircle) {
        contextBall.fill();
    }
    else {
        contextBall.stroke();
    }
}

let Ball = function() {
    this.x = 150;
    this.y = 80;
    this.xSpeed = (Math.random()*5) - 5;
    this.ySpeed = (Math.random()*5) - 5;
    arrayColor = ["red", "orange", "yellow", "green", "blue", "pink", "purple", "tomato", "#ede", "gold", "silver", "amber", "azure", "beige", "body color", "bronze", "chocolate", "lilac", "pearl", "raspberry", "sand", "vinous", "light sea green"];
    this.color = color();
}

let color = function() {
    return arrayColor[Math.floor(Math.random()*arrayColor.length)];
}

Ball.prototype.drawBall = function(x, y) {
    contextBall.lineWidht = 3;
    contextBall.fillStyle = this.color;
    contextBall.strokeStyle = "black";
    circleBall(this.x, this.y, 10, true);
    circleBall(this.x, this.y, 10, false);
}

Ball.prototype.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
}

Ball.prototype.circleCollision = function() {
    if (this.x < 0 || this.x > 300) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > 150) {
        this.ySpeed = -this.ySpeed;
    }
}

let arrayBall = [];

for(i = 0; i < 500; i++) {
    arrayBall[i] = new Ball();
}

let moving = function() {
    contextBall.clearRect(0, 0, 300, 150);
    for (i = 0; i < arrayBall.length; i++) {
        arrayBall[i].drawBall();
        arrayBall[i].move();
        arrayBall[i].circleCollision();
    }
    contextBall.strokeRect(0, 0, 300, 150);
}

setInterval(moving, 50);

