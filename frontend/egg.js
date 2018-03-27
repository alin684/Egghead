class Egg {
  constructor(x, y){
    this.x = x
    this.y = y
    this.eggSpeed = random(1,4)
  }

  show(){
    fill(240,242,240)
    ellipse(this.x, this.y, 10, 10);
  }

  update(){
    this.y+=this.eggSpeed
  }
}
