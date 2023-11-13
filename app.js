/*
escolher uma peça a ser removida
remover um peça no html quando utilizada
*/

var board;
var pieces_players;
var actual_player;
//wait-p1, p1-chosepiece, selectpos
var state = '';


//setting states
function setState(s){
   
    if(state == 'p1-select-finalpos'){
        if(emptyPlace(selectedposition[1], selectedposition[0])){
           
           if( movePiece(oldselectedposition[1], oldselectedposition[0],
                selectedposition[1], selectedposition[0], 0) ){
                    state = 'wait-p2';
                    removeInteractionPiece(actual_player);
                    nextPlayer()
                }else{
                    console.log('jogada ilegal, não é possivel mover para essa posição');
                }
        }
    }else if(state == 'p2-select-finalpos'){
        if(emptyPlace(selectedposition[1], selectedposition[0])){
            if(movePiece(oldselectedposition[1], oldselectedposition[0],
                selectedposition[1], selectedposition[0], 1)){
                    state = 'wait-p1';
                    nextPlayer();
                    removeInteractionPiece(actual_player);
                }else{
                    console.log('jogada ilegal, não é possivel mover para essa posição');
                }
                
        }
    }else if(s == 'p1-chosepiece'){
        if(state == 'wait-p1'){
            state = s;
            showMessage("Selecione uma peça e uma posição!");
        }else{
            showMessage('Jogada ilegal, não é sua vez!');
        } 
    }else if(s == 'p2-chosepiece'){
        if(state == 'wait-p2'){
            state = s;
            showMessage("Selecione uma peça e uma posição!");
        }else{
            showMessage('Jogada ilegal, não é sua vez!')
        } 
    }else if(s == 'p1-selectpos'){
        if(state == 'p1-chosepiece'){
            state = s;
            if(newPiece(selectedposition[1], selectedposition[0], 0)){
                state = 'wait-p2';
                removeInteractionPiece(actual_player);
                nextPlayer()
            }
        }else if(board[selectedposition[1]][selectedposition[0]] == 0){
            state = 'p1-select-finalpos';
            showMessage('Selecione a posição de destino!');
            oldselectedposition = selectedposition;
        }else{
            showMessage('Jogada ilegal, não é possivel selecionar um local')
        }
    
    }else if(s == 'p2-selectpos'){
        if(state == 'p2-chosepiece'){
            state = s;
            if(newPiece(selectedposition[1], selectedposition[0], 1)){
                state = 'wait-p1';
                removeInteractionPiece(actual_player);
                nextPlayer()
            }
        }else if(board[selectedposition[1]][selectedposition[0]] == 1){
            state = 'p2-select-finalpos';
            showMessage('Selecione a posição de destino!');
            oldselectedposition = selectedposition;
        }else{
            showMessage('Jogada ilegal, não é possivel selecionar um local');
        }
    }
}
//start new game 
function startNewGame(){

    //12 pieces of each player
    pieces_players = [12,12];
    setActualPlayer(0);
    state = "wait-p1";
    //create array of board
    board= new Array(6);
    for(let i = 0; i < 6; i++)
        board[i] = [null,null,null,null,null];
    
    printAll();
    showMessage('Jogador Amarelo inicia o jogo! Escolha uma peça e uma posição.')
 
}
//this place is empty?
function emptyPlace(x, y){
    return board[x][y] == null;
}
//this play is at place?
function atPlace(x, y, player){
    return board[x][y] == player;
}
//create a piece
function newPiece(x, y, player){
    if((pieces_players[player]) && (emptyPlace(x,y))){
        board[x][y] = player;
        pieces_players[player]--;
        return true;
    }else{
        return false;
    }
}
//get another player
function anotherPlayer(player){
    return player==1?0:1;
}

//move piece in board
function movePiece(x1, y1, x2, y2, player){
   
    if((atPlace(x1,y1,player)) && emptyPlace(x2,y2) ){
        
        if((x1+y1 == x2+y2+1) || (x1+y1 == x2+y2-1)){
           
           board[x1][y1] = null;
           board[x2][y2] = player; 
           return 1;
        }else if((x1+y1 == x2+y2+2) || (x1+y1 == x2+y2-2)){
            if(x1>x2){
                if( !atPlace(x1-1, y1, anotherPlayer(player))){
                    return -1;    
                }
            }else if(x1<x2){
                if( !atPlace(x1+1, y1, anotherPlayer(player))){
                    return -2; 
                }
            }else if(y1>y2){
                if( !atPlace(x1, y1-1, anotherPlayer(player))){
                    return -3; 
                }
            }else if(y1<y2){
                if( !atPlace(x1, y1+1, anotherPlayer(player))){
                     return -4;  
                }   
            }
            board[x1][y1] = null;
            board[x2][y2] = player;
        }
        return 2;
    }else{
        return -5;
    }
}
//change to other player
function nextPlayer(){
    setActualPlayer(anotherPlayer(actual_player));
}

function logboard(){
    for(let i = 0; i < 5; i++)
        console.log(board[i]);
}