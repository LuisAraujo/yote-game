var canvas = document.getElementById("main-canvas");
var ctx = canvas.getContext("2d");
var selectedposition = [1,1];
var mousepos = [0,0];
var opacity = 1;

//clear all board
function clearBoard(){
    ctx.clearRect(0,0,600,500);
}

//print grid board
function printBoard(){
    ctx.fillStyle = "rgb(250,200,24)";
    ctx.rect(0,0,600,500);
    ctx.fill();
    for(let i =1; i <= 5; i++){
        ctx.beginPath();
        ctx.moveTo(100*i, 0);
        ctx.lineTo(100*i, 500);
        ctx.stroke();
    }

    for(let i =1; i <= 5; i++){
        ctx.beginPath();
        ctx.moveTo(0, 100*i);
        ctx.lineTo(600, 100*i);
        ctx.stroke();
    }
}
//get postions by coordinates
function getPosition(x, y){
    var posx = parseInt(x/100);
    var posy = parseInt(y/100);
    return [posx, posy];
};

//highligh focus position
function highlightPosition(pos){
    ctx.fillStyle = "rgb(100,250,250)";
    ctx.fillRect(1+pos[0]*100,1+pos[1]*100,98,98);
    //ctx.fill();
}

//print select position
function printSelected(pos){
    ctx.fillStyle = "rgba(230,81,10, "+opacity+")";
    ctx.al
    ctx.fillRect(1+pos[0]*100,1+pos[1]*100,98,98);
    ctx.fill();
}

//convert mouse position in canvas positions
function convertMousePosition(e){
    return getPosition(e.offsetX, e.offsetY);
}

//events
canvas.addEventListener("mousemove", (e) => {
    mousepos = convertMousePosition(e);
});

canvas.addEventListener("mousedown", (e) => {
    opacity = 1;
    selectedposition = convertMousePosition(e);
    console.log(selectedposition)
    setState('p'+(actual_player+1)+'-selectpos');
});

//pint a piece
function printPiece(player, x, y){
    ctx.strokeStyle = 'rgb(0,0,0)'
    if(player == 0)
        ctx.fillStyle = "rgb(250,210, 40)";
    else 
        ctx.fillStyle = "rgb(70,160, 160)";

    ctx.beginPath();
    ctx.arc(45+100*x, 45+100*y, 30, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.stroke();
}

//print all pieces
function printPieces(){
    for(let i = 0 ; i < 5; i++)
        for(let j = 0 ; j < 6; j++){
            if(board[i][j]!=null)
                printPiece(board[i][j], j, i);
        }
}

//call all print functions
function printAll(){
    requestAnimationFrame(printAll);
    clearBoard();
    printBoard(); 
    highlightPosition(mousepos);
    printSelected(selectedposition);
    printPieces();
    opacity-=0.1;
}

