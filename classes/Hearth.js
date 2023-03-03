class Hearth{
    constructor(xCoord, yCoord, size, code){
        this.x = xCoord;
        this.y = yCoord;
        this.s = size;
        this.color = code;    
    }
    display(){
    strokeWeight(0);
	fill(this.color);
	ellipse(this.x, this.y, this.s);
	ellipse(this.x + 50, this.y, this.s);
	fill(this.color);
	triangle(25 , 60 , 125 , 60, 75, 135);
    }
}