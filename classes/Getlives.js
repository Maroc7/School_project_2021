class Getlives{
    constructor(Text, xCoord, yCoord,speed){
        this.text= Text
        this.x = xCoord;
        this.y = yCoord;
        this.speed = speed
    }   
    display(){
        //rect(this.x-15 ,this.y-20,30, 30);
        textSize(30);
        fill("red");
        text(this.text, this.x, this.y);
    }
    move(){
        this.x -= this.speed;
        if(this.x + 100 < 0){
        }
    }
    isColliding(obj){
        let isCollected = collideRectRect(obj.x-10,obj.y-10,obj.s,45, this.x - 15, this.y -20, 30,30);
        return isCollected;
          }  
}