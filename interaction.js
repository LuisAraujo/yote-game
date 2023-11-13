var elements = document.getElementsByClassName("ball");
var span_actualplayer = document.getElementById('actual-player');
var cont_actualplayer = document.getElementById('header');
var cont_actualmessage = document.getElementById('actual-messages');

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

function showMessage(message){
    cont_actualmessage.innerText = message;
}

var playersname = ['Amarelo', 'Azul']

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

startNewGame();

