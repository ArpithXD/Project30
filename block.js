class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      
      if (this.body.speed < 3) {
        this.body.display();
      } else {
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      var pos =this.body.position;
      rectMode(CENTER);
      fill("lightblue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };