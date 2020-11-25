class Bob{
    constructor(x, y, radius) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
      
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("purple")
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}