class Paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
      this.body=Bodies.circle(x,y,r,options) 
      this.x=x;
      this.r=r;
      this.y=y;
      World.add(world,this.body);

    }
    display()
    {
        var paper1=this.body.position;
        push();
        translate(paper1.x,paper1.y);
        fill("yellow");
        ellipse(0,0,this.r,this.r);
       pop();
    }
}