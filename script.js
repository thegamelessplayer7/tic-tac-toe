let winnerText = document.getElementById('announce-winner');

var gameboard = (function() {
    let board = [];
    let player1Array = [];
    let player2Array = [];

    return {
        player1Array,
        player2Array
    }
})();

var squares = (function() {
    let squareOne = document.getElementById('board-one');
    let squareTwo = document.getElementById('board-two');
    let squareThree = document.getElementById('board-three');
    let squareFour = document.getElementById('board-four');
    let squareFive = document.getElementById('board-five');
    let squareSix = document.getElementById('board-six');
    let squareSeven = document.getElementById('board-seven');
    let squareEight = document.getElementById('board-eight');
    let squareNine = document.getElementById('board-nine');

    return {
    
        squares,
        squareOne: squareOne,
        squareTwo,
        squareThree,
        squareFour,
        squareFive,
        squareSix,
        squareSeven,
        squareEight,
        squareNine
    }

    
})()


let squareOne = document.getElementById('board-one');
    let squareTwo = document.getElementById('board-two');
    let squareThree = document.getElementById('board-three');
    let squareFour = document.getElementById('board-four');
    let squareFive = document.getElementById('board-five');
    let squareSix = document.getElementById('board-six');
    let squareSeven = document.getElementById('board-seven');
    let squareEight = document.getElementById('board-eight');
    let squareNine = document.getElementById('board-nine');


   

const gamepieces = {
    player1: 'X', 
    player2: 'O',
}
let player1Array = [];
let player2Array = [];

let playerOneBoard = [];
let playerTwoBoard = [];

const conditionsOne = ['board-one', 'board-five', 'board-nine'];
const conditionsTwo = ['board-one', 'board-two', 'board-three'];
const conditionsThree = ['board-one', 'board-four', 'board-seven'];
const conditionsFour = ['board-three', 'board-five', 'board-seven'];
const conditionsFive = ['board-three', 'board-six', 'board-nine'];
const conditionsSix = ['board-seven', 'board-eight', 'board-nine'];
const conditionsSeven = ['board-four', 'board-five', 'board-six'];
const conditionsEight = ['board-two', 'board-five', 'board-eight'];


let grid = document.getElementById('gameboard-container');
let move;
grid.addEventListener('click', (event) => {
    move = document.querySelector(`div[id=${event.target.id}]`);
    
    if (!move.textContent && player1Array.length === 0 && player2Array.length === 0) {
    player1Array.push(gamepieces.player1);
    move.textContent = gamepieces.player1;
    playerOneBoard.push(move.id);
    } else if (!move.textContent && player1Array.length > 0 && player2Array.length === 0) {
        player2Array.push(gamepieces.player2)
        move.textContent = gamepieces.player2;
        playerTwoBoard.push(move.id);
    } else if (!move.textContent && player1Array.length === player2Array.length) {
        player1Array.push(gamepieces.player1);
        move.textContent = gamepieces.player1;
        playerOneBoard.push(move.id);
    } else if (!move.textContent && player1Array.length > player2Array.length) {
        player2Array.push(gamepieces.player2);
        move.textContent = gamepieces.player2;
        playerTwoBoard.push(move.id);
    }
  

    if (playerOneBoard.length >= 3) {
        if(playerOneBoard.includes('board-one', 'board-two', 'board-three')) {
            winnerText.textContent = 'PlayerOne wins!';    
    } else if(playerTwoBoard.includes('board-one', 'board-two', 'board-three')) {
        winnerText.textContent = 'PlayerTwo wins!';
    } else if (playerOneBoard.includes('board-one', 'board-five', 'board-nine')) {
        winnerText.textContent = 'PlayerOne wins!';
    } else if (playerTwoBoard.includes('board-one', 'board-five', 'board-nine')) {
        winnerText.textContent = 'PlayerTwo wins!';
    } else if (playerOneBoard.includes('board-one', 'board-four', 'board-seven')) {
        winnerText.textContent = 'PlayerOne wins!';
    } else if (playerTwoBoard.includes('board-one', 'board-four', 'board-seven')) {
        winnerText.textContent = 'PlayerTwo wins!';
    } else if(playerOneBoard.includes('board-three', 'board-five', 'board-seven')) {
        winnerText.textContent = 'PlayerOne wins!';
    } else if(playerTwoBoard.includes('board-three', 'board-five', 'board-seven')) {
        winnerText.textContent = 'PlayerTwo wins!';
    } else if(playerOneBoard.includes('board-three', 'board-six', 'board-nine')) {
        winnerText.textContent = 'PlayerOne wins!';
    } else if(playerTwoBoard.includes('board-three', 'board-six', 'board-nine')) {
        winnerText.textContent = 'PlayerTwo wins!';
    } else if(playerOneBoard.includes('board-seven', 'board-eight', 'board-nine')) {
        winnerText.textContent = 'PlayerOne wins!';
    } else if(playerTwoBoard.includes('board-seven', 'board-eight', 'board-nine')) {
        winnerText.textContent = 'PlayerTwo wins!';
    } else if(playerOneBoard.includes('board-four', 'board-five', 'board-six')) {
        winnerText.textContent = 'PlayerOne wins!';
    } else if(playerTwoBoard.includes('board-four', 'board-five', 'board-six')) {
        winnerText.textContent = 'PlayerTwo wins!';
    } else if(playerOneBoard.includes('board-two', 'board-five', 'board-eight')) {
        winnerText.textContent = 'PlayerOne wins!';
    } else if(playerTwoBoard.includes('board-two', 'board-five', 'board-eight')) {
        winnerText.textContent = 'PlayerTwo wins!';
    }
}
console.log(playerOneBoard, playerTwoBoard);
});
    
    
    

    
/*function gameplay {
    1, 5, 9
    1, 2, 3
    1, 4, 7
    3, 5, 7
    3, 6, 9
    7, 8, 9
    4, 5, 6
    2, 5, 8
}*/

/*
Put gamepieces inside of an array (X and O). Once a click
is made on a square, push the gamepiece to the player
array. On the next click, push the next gamepiece to the
player array.
*/

    



/*
Create gameboard that will be 3x3 squares. 
Save the gameboard squares in an object so that each square
has its own key, so that when a player selects a square,
it enters that object key into the player array.

There needs to be turns. If the last click was an X, the
next click should be an O. If the last click saved the
click to player1 array, then the next click should save
to the player2 array.





Create logic for 3 squares in a row. If there are 3 X's
or 3 O's in a row, I want the game to end. 

*/