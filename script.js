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

    squareOne.addEventListener('click', (event) => {
        gameboard.player1Array.push('x');
        squareOne.textContent = 'X';
    }, {once: true});


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




/*
Create gameboard that will be 3x3 squares. 
Save the gameboard squares in an object so that each square
has its own key, so that when a player selects a square,
it enters that object key into the player array.




*/