let seed;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB)
  seed = int(random(0,100000));
}

function draw() {
  noStroke()
  
  background("white")

  let numStripes = 60
  let stripeHeight = height / numStripes

  for (let i = 0; i < numStripes; i++) {
    fill(map(i,0,numStripes,0,60), 100, 100)
    rect(0, i * stripeHeight, width, stripeHeight)
  }

  fill(map(numStripes*16/20,0,numStripes,0,60), 100, 100)


  ellipse(mouseX, mouseY, 300, 300)
  
  for (let i = 0; i < numStripes; i++) {
    if (i % 2 == 0) {
      fill(map(i,0,numStripes,0,60), 100, 100)
      rect(0, i * stripeHeight, width, stripeHeight)
    }
  }

  fill("lightBlue")
  rect(0,height - height / 5, width, height / 5)

  randomSeed(seed)

  fill("white")
  for (let i = 0; i < 15; i++)  
    ellipse(random(0,width),random(0,300),random(100,300),random(50,100))
  

}