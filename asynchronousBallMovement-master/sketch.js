var  hyponeticball,database;
var position;


function setup(){
 database=firebase.database();
    console.log(database);
    createCanvas(500,500);
    hyponeticball = createSprite(250,250,10,10);
    hyponeticball.shapeColor = "red";
    var hyponeticBallPosition= databse.ref(ball/'musician');
    hyponeticBallPosition.on("value",readPosition,showerror);
   
    
}

function draw(){
    background("white");

    if(position !== undefined){
     if(keyDown(LEFT_ARROW)){
        writePosition(-9,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(9,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-9);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+9);
    }
	drawSprites();
    }
}
function readPosition (data){
positon=data.val();
hyponeticball.x=position.x;
hyponeticball.y=position.y;
}
function writePosition(x,y){
database.ref('ball/position').set({
'x':position.x+x,
'y':position.y+y,
})

    
}
function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
