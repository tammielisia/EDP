function setup() {
  createCanvas(300, 300);
  strokeWeight(2);
}

function draw() {
  background(0, 255, 100);
  
  drawHouse(25, 25, 100, 100);
  drawHouse(150, 40, 125, 200);
  drawHouse(25, 150, 100, 125);
}

function drawHouse(houseX, houseY, houseWidth, houseHeight) {
  const frontY = houseY + houseHeight * .4;
  const frontHeight = houseHeight * .6;
  
  // front
  fill(255, 255, 153);
  rect(houseX, frontY, houseWidth, frontHeight);
  
  // roof
  fill(139, 69, 19);
  triangle(houseX, frontY,
           houseX + houseWidth * .5, houseY,
           houseX + houseWidth, frontY);
  
  const windowWidth = houseWidth * .25;
  const windowHeight = frontHeight * .25;
  const windowY = frontY + frontHeight * .15;
  
  const leftWindowX = houseX + houseWidth * .1;
  const rightWindowX = (houseX + houseWidth) - 
                       (houseWidth * .1) - windowWidth;
  
  // windows 
  fill(50, 125, 255);
  rect(leftWindowX, windowY, windowWidth, windowHeight);
  line(leftWindowX, windowY + windowHeight * .5,
       leftWindowX + windowWidth, windowY + windowHeight * .5);
  line(leftWindowX + windowWidth * .5, windowY,
       leftWindowX + windowWidth * .5, windowY + windowHeight);
  rect(rightWindowX, windowY, windowWidth, windowHeight);
  line(rightWindowX, windowY + windowHeight * .5,
       rightWindowX + windowWidth, windowY + windowHeight * .5);
  line(rightWindowX + windowWidth * .5, windowY,
       rightWindowX + windowWidth * .5, windowY + windowHeight);
  
  const doorWidth = houseWidth * .25;
  const doorHeight = frontHeight * .4;
  const doorX = houseX + houseWidth * .5 - doorWidth * .5;
  const doorY = houseY + houseHeight - doorHeight;
  
  // door
  fill(139, 69, 19);
  rect(doorX, doorY, doorWidth, doorHeight);
  
  const doorknobX = doorX + doorWidth * .2;
  const doorknobY = doorY + doorHeight * .5;
  const doorknobSize = houseWidth * .05;
  
  // doorknob
  fill(0);
  circle(doorknobX, doorknobY, doorknobSize);
}