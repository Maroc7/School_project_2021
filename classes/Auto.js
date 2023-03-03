class Auto{
    constructor(xCoord, yCoord,size, speed, code){
        this.x = xCoord;
        this.y = yCoord;
        this.s = size;
        this.speed = speed;
        this.color = code;
    }
    display(){
    //hitbox
     rectMode(CORNER);
     //rect(this.x -10,this.y-10,this.s + 15,80,this.speed);

     fill(this.color);
     rect(this.x, this.y, this.s, 50, this.speed);
     //rect(this.x, this.y , 40, 50,this.speed);
     fill(0);
     ellipse( this.x,  this.y + 35, this.s - 60); 
     ellipse(this.x + 100, this.y + 35, this.s - 60);
    }

    move(){
        this.x -= this.speed;
        if(this.x + 100 < 0){
            this.x = 1700;
            this.y = random(200, 600);
            player.addPoints(1);
        }
    }

    isColliding(obj){
      let IsHit = collideRectRect(obj.x-10,obj.y-10,obj.s,45, this.x - 45, this.y -45, this.s,this.s, this.speed);
      return IsHit;
        }
    
    
    }

