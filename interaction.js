
var playersname = ['Amarelo', 'Azul']
var btnstart = document.getElementById('btn-star');
btnstart.addEventListener('click', setStartGame, false);

//function called in click pieces
function selectPiece(e){
    if(e.target.className == "ball one"){
        setState('p1-chosepiece');
    }else{
        setState('p2-chosepiece');
    }
}

//show message in header
function showMessage(message){
    cont_actualmessage.innerText = message;
}

//change info on actual player
function setActualPlayer(player){
    actual_player = player;
    span_actualplayer.innerText = playersname[actual_player];
    cont_actualplayer.className = 'container-p'+(player+1);
}

//remove pieces after uses
function removeInteractionPiece(player){
    var classes = ['one', 'two'];
    var elem = document.getElementsByClassName("ball " + classes[player]);
    if(elem.length != 0 )
        elem[0].remove();
}

//function to start game
function setStartGame(){
    //show game page
    document.getElementById('start-game').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    //get elements
    elements = document.getElementsByClassName("ball");
    span_actualplayer = document.getElementById('actual-player');
    cont_actualplayer = document.getElementById('header');
    cont_actualmessage = document.getElementById('actual-messages');
    modalwin = document.getElementById('modal-win');
    nameplayerwin = document.getElementById('winplayer');
    
    //add click events to pieces
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', selectPiece, false);
    }
    
    startNewGame();
}
//show win modal
function showWin(player){
    modalwin.style.display = 'block';
    blackground.style.display = 'block';
    nameplayerwin.innerText = playersname[player];
}

