var elements = document.getElementsByClassName("ball");
var span_actualplayer = document.getElementById('actual-player');
var cont_actualplayer = document.getElementById('container-actual-player');
function selectPiece(e){
    if(e.toElement.className == "ball one"){
        setState('p1-chosepiece');
    }else{
        setState('p2-chosepiece');
    }
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', selectPiece, false);
}


startNewGame();

