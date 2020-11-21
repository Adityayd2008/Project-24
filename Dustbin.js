class Dustbinside {
    constructor(x, y,height,width,angle) {

       
      
      this.body = Bodies.rectangle(x, y, width , height, {isStatic:true} );
      this.width = 20;
      this.height = height;
      this.width = width;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };