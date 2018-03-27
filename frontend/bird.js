
class Bird {
  constructor(){
    this.x = random(width)
    this.y = random(10, 100)
    this.birdSpeed = random(2,8)
  }

  show(){
    fill(0,255,255);
    ellipse(this.x, this.y, 50, 50);

    if(this.x>width){
      this.x = 0
    }
  }

  update(){
    this.x+=this.birdSpeed
  }

}
