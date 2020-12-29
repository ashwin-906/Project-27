class Bob
 {
    constructor (x,y,r){
      
        var option = {
             isStatic:false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
  
          this.body = Matter.Bodies.circle(x,y,r,option);
          this.x = x;
          this.y = y;
          this.r = r;
          World.add(world,this.body);
      }
      
      display (){
          fill("pink");
          ellipseMode(RADIUS);   
          ellipse(this.x,this.y,this.r,20, 20);
      }
}
