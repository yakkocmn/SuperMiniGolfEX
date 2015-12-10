
var canvasGA = document.getElementById("gameArea");
var ctx = canvasGA.getContext("2d");
canvasGA.addEventListener("mousemove", setcoords, false);
ctx.rect(0, 0, 1024, 576);
ctx.lineWidth = "10";
ctx.stroke();


function setcoords(){
  var x = event.pageX;
  var y = event.pageY;
ctx.rect( x, y, 10, 10);
ctx.stroke();
}

var FPS = 30;
setInterval(function() {
//  update();
  draw();
}, 1000/FPS);

function draw() {
  ctx.rect( x, y, 10, 10);
  ctx.stroke();
  console.log("gfgff");
}


function Ball() {
    this.image = new Image();
    this.image.src = "ball.png";
}
