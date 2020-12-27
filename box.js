class Box {
//initialize the objects
    constructor(x,y,width,height){

        var box_options = {
            //JSON
            restitution : 0.8
        }
        
        //this -> Name of object created using class
                
        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){

        var angle = this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        
        rectMode(CENTER);
        fill(255)
        rect(0,0,this.width,this.height);

        pop();

    }

}