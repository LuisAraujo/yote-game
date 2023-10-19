var board;
var pieces_players;
var actual_player;
var state;

//start new game 
function startNewGame(){
    //12 pieces of each player
    pieces_players = [12,12];
    actual_player = 0;
    state = "player-0";
    //create array of board
    board= new Array(5);
    for(let i = 0; i < 6; i++)
        board[i] = [null,null,null,null,null,null, null];
 
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
    actual_player = anotherPlayer(actual_player);
}

function logboard(){
    for(let i = 0; i < 5; i++)
        console.log(board[i]);
}