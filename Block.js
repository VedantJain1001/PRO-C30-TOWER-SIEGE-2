class Block {
  constructor(x, y, width, height) {
    var options = {
      'isStatic':false,  
      'friction':0,
      'density':0.1
    }
    this.Visibility = 225
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
  if(this.body.speed<3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    rect(0, 0, this.width, this.height);
    pop();
  }
  else{
    World.remove(world,this.body);
    push();
    this.Visiblity = this.Visiblity-1; 
    tint(255,this.Visiblity);
    pop();
  }
  }
};