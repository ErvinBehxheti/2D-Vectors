const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const point = { x: 0, y: 0 };

const offset = {
  x: canvas.clientWidth / 2,
  y: canvas.clientHeight / 2,
};

ctx.translate(offset.x, offset.y);

document.onmousemove = (event) => {
  point.x = event.x - offset.x;
  point.y = event.y - offset.y;

  update();
};

function update() {
  ctx.clearRect(-offset.x, -offset.y, canvas.clientWidth, canvas.clientHeight);

  drawCoordinateSystem();
  drawPoint(point);

  drawArrow(point)
}

function magnitude({ x, y }) {
  return Math.hypot(x, y);
}

function direction({x, y}) {
    return Math.atan(y / x)
}

function drawArrow(tip, color="white", size=50) {
    ctx.beginPath();
    ctx.moveTo(0, 0)
    ctx.lineTo(tip.x, tip.y);
    ctx.strokeStyle=color;
    ctx.stroke()
}

function drawCoordinateSystem() {
  ctx.beginPath();
  ctx.moveTo(-offset.x, 0);
  ctx.lineTo(canvas.clientWidth - offset.x, 0);
  ctx.moveTo(0, -offset.y);
  ctx.lineTo(0, canvas.clientHeight - offset.y);
  ctx.setLineDash([5, 4]);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawPoint(loc, size = 10, color = "white") {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(loc.x, loc.y, size / 2, 0, Math.PI * 2);
  ctx.fill();
}

console.log("hey");
