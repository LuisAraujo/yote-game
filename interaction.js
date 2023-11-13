
var playersname = ['Amarelo', 'Azul']
var btnstart = document.getElementById('btn-star');
btnstart.addEventListener('click', setStartGame, false);

function selectPiece(e){
    
    if(e.target.className == "ball one"){
        setState('p1-chosepiece');
    }else{
        setState('p2-chosepiece');
    }
}

function showMessage(message){
    cont_actualmessage.innerText = message;
}

function setActualPlayer(player){
    actual_player = player;
    span_actualplayer.innerText = playersname[actual_player];
    cont_actualplayer.className = 'container-p'+(player+1);
}

function removeInteractionPiece(player){
    var classes = ['one', 'two'];
    var elem = document.getElementsByClassName("ball " + classes[player]);
    if(elem.length != 0 )
        elem[0].remove();
}

function setStartGame(){
    
    document.getElementById('start-game').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    elements = document.getElementsByClassName("ball");
    span_actualplayer = document.getElementById('actual-player');
    cont_actualplayer = document.getElementById('header');
    cont_actualmessage = document.getElementById('actual-messages');

    
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', selectPiece, false);
    }
    
    startNewGame();
}


