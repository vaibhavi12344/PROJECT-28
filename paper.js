class paper{
constructor(x,y,radius){

var options={
'isStatic':false,
'restitution':0.3,
'friction':0.5,
'density':1.2
}
this.body=Bodies.circle(x,y,radius,options)
this.image=loadImage("paper.png");
this.width=width;
this.height=height;

World.add(world,this.body)
}
display(){
    image(this.image,200,200,200,300)
}
}