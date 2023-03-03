let auto1;
let auto2;
let auto3;
let autos;
let xPos;

let player;
let playerLives;
let Amountcollect
let gameOver;
let bg;
let hearth;
let getLives1;
let getLives;
let points;

let hornSound;
let crashSound;
let lifeSound;
let carstartSound;
let gameoverSound;
let pricedownFont// font

//sounds effects en font.
function preload(){
hornSound = loadSound ('sounds/car_horn.mp3');
crashSound = loadSound('sounds/car_crash.mp3.mp3');
lifeSound = loadSound('sounds/+1_life.mp3.mp3');
carstartSound = loadSound('sounds/car_start.mp3');
gameoverSound = loadSound('sounds/gameover.mp3.mp3');
pricedownFont = loadFont('fonts/pricedown bl.otf')
}
//waardes declareren.
function setup(){
createCanvas(1500,600);
textFont(pricedownFont);
auto1 = new Auto(1600, 350, 100, 2, "#fc403f"); // x =1350
auto2 = new Auto(1600, 150,100,1, "#fc403f"); //x = 1450
auto3 = new Auto(1600, 550,100,1, "#fc403f"); // x = 1500
xPos = 1700;
autos = [auto1, auto2, auto3];
console.log(autos);
playerLives = 5;
Amountcollect = 0;
player = new Player(150, 250, 110);
console.log(player);
setInterval(spawnNewAuto, 8000)
gameOver = false;
bg = loadImage('images/crashed.jpg');
hearth = new Hearth(50, 50, 60, "#fc403f");
getLives1 = new Getlives ("+1 life",1600, 350, 1);
getLives = [getLives1];
//console.log(getLives);
setInterval(spawnNewlife, 18000);
}

function draw(){
if (gameOver == false){ 
background(200);
//tekening straat.
strokeWeight(8);
fill(100); 
rect(0,200,1500,400);
line(50, 400, 150, 400);
line(200, 400, 300, 400);
line(350, 400, 450, 400);
line(500, 400, 600, 400);
line(650, 400, 750, 400);
line(800, 400, 900, 400);
line(950, 400, 1050, 400);
line(1100, 400, 1200, 400);
line(1250, 400, 1350, 400);
line(1400, 400, 1500, 400);
// tekst
textSize(25);
fill("white");
//text("E19", width/2 - 50, 25);
fill("yellow");
text("MECHELEN", width/2 + 20,25);
fill("red");
text("CITY", width/2 + 100,25);

//levens en score.
hearth.display();
textSize(30);
textAlign(CENTER, CENTER);
text("Made by Hamza Maroc", width/2, 100);
if (playerLives > 1){
fill("white");
text(playerLives + " lives", width/2 - 550, height/2- 200);
}else{
    fill("white");
    text(playerLives + " life left!", width/2 - 550, height/2- 200);
}

//speler weergeven.
strokeWeight(0);
player.display();
player.move();

//auto's en botsing.
for (let i = 0; i < autos.length; i++){
    autos[i].display();
    autos[i].move();
    //noStroke();
    //als de autos worden geraakt.
    if (autos[i].isColliding(player)){
        console.log("Car "+ i +" is hit!");
        autos.splice(i, 1);
        playerLives--;
        player.addPoints(-1);
        console.log(playerLives + " player life left" );
        hornSound.play();
        crashSound.play();
        if(playerLives == 0){
         gameOver = true;
         playerLives = 5;
         getLives = [];
         gameoverSound.play();
        }
    } 
        // als er minder dan 3 autos zijn of 3 komen er 2 bij.     
       if(autos.length <= 3){
           spawnNewAuto();
       }      
}
   //als speler +1 raakt.
   for (let i = 0; i < getLives.length; i++){
    getLives[i].display();
    getLives[i].move();
        if(getLives[i].isColliding(player)){
            console.log("+1 life collected");
            getLives.splice(i, 1);
            playerLives ++;
            Amountcollect ++;
            lifeSound.play();
        }
    }

    }
    else{// game over scherm alse gameOver TRUE is.
        //console.log("GAME OVER");
        background(bg);
        points = player.points;
        fill(0);
        textSize(62);
        textAlign(CENTER, CENTER);
        text("CRASHED!!!, GAME OVER", width/2, height/2- +200);
        textSize(23);
        text("press R to restart the game.", width/2, height/2 - 125);
        text("Youre points are: "  + points , 150, 100);
        text("Amount of collected lifes: " + Amountcollect, 150, 150);

            if(points < 0){
            fill("red");
            text("Rank: D ", width/2, 500);
            } 
            else if(points < 25){
            fill("orange");    
            text("Rank: C ", width/2, 500);
            } 
            else if(points < 50){
            fill("yellow");
            text("Rank: B ", width/2, 500);
            }
            else if(points < 75){
            fill("green");
            text("Rank: A ", width/2, 500);
            }
            else{
            fill("green");
            text("Rank: A ++", width/2, 500);
            }
    }    
}
//nieuwe autos laten spawnen.
function spawnNewAuto(){
    //onsole.log("interval new car ok")
    let rood = "fc403f"; 
    let xPos = 1700 
    let yPos = random(200, 600); 
    let randomSize = 100;
    let randomSpeed = round (random(2,8));
    let Color = rood;
    const auto = new Auto(xPos, yPos, randomSize, randomSpeed, Color);
    autos.push(auto);
}
// het spel laten restarten door R te duwen.
function keyPressed(e){
    e.preventDefault();
    if(e.keyCode ==  82){
        autos = [auto1, auto2, auto3];
        auto1 = new Auto(1600, 350, 100, 2, "#fc403f"); // x =1350
        auto2 = new Auto(1600, 150,100,1, "#fc403f"); //x = 1450
        auto3 = new Auto(1600, 550,100,1, "#fc403f"); // x = 1500
        getLives = [getLives1];
        getLives1 = new Getlives ("+1 life",1600, 350, 1);
        player = new Player(150, 250, 110 ,3);
        gameOver = false;
        carstartSound.play();
        playerLives = 5;
        Amountcollect = 0;
        //console.log("The game have been restarted.")
    }
}
//levens laten spawnen (+1 life).
function spawnNewlife(){
    //console.log("interval new life ok");
    let text = "+1 life";
    xPos = 1700 ;
    let yPos = random(200, 600); 
    let speed = 1;
    const getLive = new Getlives(text,xPos, yPos,speed);
    getLives.push(getLive);
}

