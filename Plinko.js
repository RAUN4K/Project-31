class Plinko{
    constructor(x,y,radius){
       var options = {

        isStatic:true,
    }
    radius = 10;
    this.radius = radius;
    this.body - Bodies.circle(x,y,this.radius,options);

    World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("white");
    ellipse(pos.x,pos.y,this.radius);
}
}