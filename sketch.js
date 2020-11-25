var ball;
var db,position
function setup(){
    createCanvas(500,500);
    db=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var positionref=db.ref("ball/position")
    positionref.on("value",readposition)
   // position=ball;
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    db.ref("ball/position").update(
        {
         x:position.x+x,
         y:position.y+y   
        }
    )
}
function readposition(data){
    position=data.val()
    ball.y=position.y
    ball.x=position.x
}