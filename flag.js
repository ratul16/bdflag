var canvas = document.getElementById('bdflag'); // create a canvas variable

canvas.width = window.innerWidth *0.6; // creating a height and width
canvas.height = window.innerHeight * 0.6;
var cont = canvas.getContext('2d');

cont.fillStyle = '#006747';
cont.fillRect(0, 0, 720, 420); // fillRect(x-coordinate, y-coordinate, width, height)

cont.beginPath();
cont.arc(350, 200, 110, 0 * Math.PI, 2 * Math.PI); // arc(x,y,round,sAngle,eAngle, counterClockWise)
cont.fillStyle = '#DA291C';
cont.fill();