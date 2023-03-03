class Player {
    constructor(xCoord, yCoord,size){
        this.x = xCoord;
        this.y = yCoord;
        this.s = size;
        this.points = 0;
    }

    display(){
    //hitbox
    rectMode(CORNER);
    //rect(this.x -10,this.y-10,this.s+15 ,80,this.speed);

            if(this.y >130 && this.y <590){
                strokeWeight(1);
                fill("#3c4451");
                rect(this.x, this.y, this.s, 50, 5); // x = 50, y = 250
                fill(20,0,0);
                ellipse(this.x, this.y + 35, this.s - 70); // x = 50, y = 250
                ellipse(this.x + 110, this.y + 35, this.s - 70); // x =160, y = 250
                fill("black");
                textSize(24);
                text("points: " + this.points,1425, 20);
            }   
    }

    move(){
            let speed = 7;
            if(keyIsDown(LEFT_ARROW)){ 
                this.x = this.x - speed;
            }
            if(keyIsDown(RIGHT_ARROW)){ 
                this.x = this.x  + speed; 
            }
            if(keyIsDown(DOWN_ARROW)) {
                this.y = this.y + speed;
            }
            if(keyIsDown(UP_ARROW)) {
                this.y = this.y - speed;
            }     
    }

    addPoints(amount){
    this.points += amount;
    }
}