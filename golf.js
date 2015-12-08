
var canvasGA = document.getElementById("gameArea");
canvasGA.addEventListener('click', processUserInput);
var contextGA = canvasGA.getContext("2d");
contextGA.rect(0, 0, 1024, 576);
contextGA.lineWidth = "10";
contextGA.stroke();
