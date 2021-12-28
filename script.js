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


   
        
        /*if (!event.target.textContent) {
        event.target.id.textContent = 'X';
        console.log(event.target.id);
        gameboard.player1Array.push(event.target.textContent);
        } else if (event.target.textContent === 'X') {
            event.target.textContent = 'O';
        } else if (event.target.textContent === 'O') {
                event.target.textContent = 'X';
            
        }*/

    

/*
    squareOne.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareOne.textContent = 'X';
    }, {once: true});
    squareTwo.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareTwo.textContent = 'X';
    }, {once: true});
    squareThree.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareThree.textContent = 'X';
    }, {once: true});
    squareFour.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareFour.textContent = 'X';
    }, {once: true});
    squareFive.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareFive.textContent = 'X';
    }, {once: true});
    squareSix.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareSix.textContent = 'X';
    }, {once: true});
    squareSeven.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareSeven.textContent = 'X';
    }, {once: true});
    squareEight.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareEight.textContent = 'X';
    }, {once: true});
    squareNine.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareNine.textContent = 'X';
    }, {once: true});
*/

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

const gamepieces = {
    player1: 'X', 
    player2: 'O'
};
let player1Array = [];
    let player2Array = [];
let grid = document.getElementById('gameboard-container');
let test;
grid.addEventListener('click', (event) => {
    test = document.querySelector(`div[id=${event.target.id}]`);
    
    if (!test.textContent && player1Array.length === 0 && player2Array.length === 0) {
    player1Array.push(gamepieces.player1);
    test.textContent = gamepieces.player1;
    } else if (!test.textContent && player1Array.length > 0 && player2Array.length === 0) {
        player2Array.push(gamepieces.player2)
        test.textContent = gamepieces.player2;
    } else if (!test.textContent && player1Array.length === player2Array.length) {
        player1Array.push(gamepieces.player1);
        test.textContent = gamepieces.player1;
    } else if (!test.textContent && player1Array.length > player2Array.length) {
        player2Array.push(gamepieces.player2);
        test.textContent = gamepieces.player2;
    }
    console.log(`Player 1: ${player1Array}`, `Player 2: ${player2Array}`);
})

/*function gameplay {
    
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


*/