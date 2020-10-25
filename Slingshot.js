class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:0
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(workd,this.sling);
    }

    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA =this.sling.bodyA.position;
            var pointB=this.pointB;
            stroleWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }


}