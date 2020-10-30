class Stone{
    constructor(x,y,h,w){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,h,w,options);
        this.h=h;
        this.w=w;
        this.image=loadImage("Images/stone.png");
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        image(this.image,0,0,this.h,this.w);
        pop();

    }

}