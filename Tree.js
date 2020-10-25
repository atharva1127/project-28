class Tree{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,400,600,options)
        this.width=width;
        this.heigth=height;
        this.image=loadImage("Images/tree.png")
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,0,500,600);
        pop();
    }


}