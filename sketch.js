class Gbox {
  constructor(_x, _y, _w) {
    this.pos = createVector(_x, _y)
    this.width = _w

    this.n = 0

    this.direction = 0 
  }

  render() {
    rectMode(CENTER)

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)


    fill(r, g, b)

    strokeWeight(1)
    stroke(255)
    translate(this.pos.x, this.pos.y)
    rotate(radians(90) * this.n)

    rect(0, 0, this.width, this.width)

    strokeWeight(3)
    stroke(255, 255, 0)

    beginShape(POINTS)

    for (let i = 90; i < 180; i+= 0.33) {
      // let vX = (this.width / 2) + this.width * Math.cos(radians(i))
      // let vY = (this.width / 2) + this.width * Math.sin(radians(i))

      // vertex(vX, vY)
      vertex((this.width / 2) + this.width * Math.cos(radians(i)), (this.width / 2) - this.width * Math.sin(radians(i)))
    }

    endShape(POINTS)
  }

  iterate() {
    this.n++

    this.direction++
    if (this.direction > 4) this.direction = 1
    

    if (this.direction === 1) {
      this.pos.x+= (this.width / 2) + ((this.width / 2) * golden)
      this.pos.y-= (this.width / 2) - ((this.width / 2) * golden)
    } else if (this.direction === 2) {
      this.pos.x+= (this.width / 2) - ((this.width / 2) * golden)
      this.pos.y+= (this.width / 2) + ((this.width / 2) * golden)
    } else if (this.direction === 3) {
      this.pos.x-= (this.width / 2) + ((this.width / 2) * golden)
      this.pos.y+= (this.width / 2) - ((this.width / 2) * golden)
    } else if (this.direction === 4) {
      this.pos.x-= (this.width / 2) - ((this.width / 2) * golden)
      this.pos.y-= (this.width / 2) + ((this.width / 2) * golden)
    }


    this.width*= golden 
  }


}


let fib
const golden = 0.618003398875

function setup() {
 // put setup code here
 // create canvas
  createCanvas(windowWidth, windowHeight)
  // set background color
  background(0, 0, 100)

  

  fib = new Gbox(width / 2, height / 2, height / 2 * golden)

  fib.render()

  textSize(20)
  strokeWeight(1)
  text("Click or tap to iterate!", -70, -150)
}


function draw() {
  // put drawing code here
  
}

function mousePressed() {
  fib.iterate()
  fib.render()
}



