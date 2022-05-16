function setup() {
  createCanvas(400, 400);

  noLoop();
}

function draw() {
  background(0, 0, 75);

  drawTree(width * 0.25, height * 0.1,
          width * 0.25, height * 0.25);

  drawTree(width * 0.5, height * 0.25,
           width * 0.5, height * 0.5);

  drawTree(width * 0.75, height * 0.1,
           width * 0.25, height * 0.75);
}

function drawTree(x, y, treeWidth, treeHeight){
  const treeBottomY = y + treeHeight * 0.9;

  strokeWeight(4);

  // trunk
  stroke(101, 0, 11);
  fill(150, 75, 0);
  rect(x - treeWidth * 0.1, treeBottomY,
      treeWidth * 0.2, treeHeight * 0.1);

  // tree
  stroke(34, 139, 34);
  fill(38, 230, 0);
  triangle(x, y,
           x + treeWidth * 0.5, treeBottomY,
           x - treeWidth * 0.5, treeBottomY);

  drawOrnament(x, y,
           x + treeWidth * 0.5, treeBottomY,
           x - treeWidth * 0.5, treeBottomY);
  drawOrnament(x, y,
           x + treeWidth * 0.5, treeBottomY,
           x - treeWidth * 0.5, treeBottomY);
  drawOrnament(x, y,
           x + treeWidth * 0.5, treeBottomY,
           x - treeWidth * 0.5, treeBottomY);
  drawOrnament(x, y,
           x + treeWidth * 0.5, treeBottomY,
           x - treeWidth * 0.5, treeBottomY);
  drawOrnament(x, y,
           x + treeWidth * 0.5, treeBottomY,
           x - treeWidth * 0.5, treeBottomY);
}

function drawOrnament(x1, y1, x2, y2, x3, y3){
  const r1 = random();
  const r2 = random();

  const x = (1 - sqrt(r1)) * x1 +
            (sqrt(r1) * (1 - r2)) * x2 +
            (sqrt(r1) * r2) * x3;
  const y = (1 - sqrt(r1)) * y1 +
            (sqrt(r1) * (1 - r2)) * y2 +
            (sqrt(r1) * r2) * y3;

  noStroke();
  fill(random(255), random(255), random(255));
  circle(x, y, random(15, 25));
}