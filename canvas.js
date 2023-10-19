var canvas = document.getElementById("main-canvas");
var ctx = canvas.getContext("2d");
var selectedposition = [1,1];
var mousepos = [0,0];
var opacity = 1;

function clearBoard(){
    ctx.clearRect(0,0,600,500);
}

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

function getPosition(x, y){
    var posx = parseInt(x/100);
    var posy = parseInt(y/100);
    return [posx, posy];
};

function highlightPosition(pos){
    ctx.fillStyle = "rgb(100,250,250)";
    ctx.fillRect(1+pos[0]*100,1+pos[1]*100,98,98);
    //ctx.fill();
}

function printSelected(pos){
    ctx.fillStyle = "rgba(230,81,10, "+opacity+")";
    ctx.al
    ctx.fillRect(1+pos[0]*100,1+pos[1]*100,98,98);
    ctx.fill();
}
function convertMousePosition(e){
    return getPosition(e.offsetX, e.offsetY);
}


canvas.addEventListener("mousemove", (e) => {
    mousepos = convertMousePosition(e);
});

canvas.addEventListener("mousedown", (e) => {
    opacity = 1;
    selectedposition = convertMousePosition(e);
});

function printAll(){
    requestAnimationFrame(printAll);
    clearBoard();
    printBoard(); 
    highlightPosition(mousepos);
    printSelected(selectedposition); 
    opacity-=0.1;
}

printAll();