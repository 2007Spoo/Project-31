class Divisons 
{
    constructor(x, y, w, h, options)
{
    var options=
    {
        isStatic: true
    }

this.body= Bodies.rectangle(x,y,w,h,options);
this.width= w;
this.height= h;

World.add(world, this,body);
}
display()
{
    var pos = this.body.position;
    push()
    rectMode(CENTER);
        fill("white");
        rect(pos.x, po.y, this,width, this,height);

        for (var k=0; k<=this.width; k=k+80)
        {
            divisions.push(new Divisons(k, height- divisionheight/2, 10, divisionheight))
        }
    pop()
}
}