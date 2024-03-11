import { Piece } from './piece.js';


// Function to update a frame in the game.
function update (time = 0) {
    // Define the time in the function to count 0.5 seconds to move the piece.
    const deltaTime = time - lastTime;
    lastTime = time;
    moveTime +=  deltaTime;
    if (moveTime>1000){
        let previewTime = [piece.getPositionX, piece.getPositionY];
        piece.incPositionY();
        let colTime = collision (previewTime);
        if (colTime) {
            solidify();
        }
        moveTime = 0;
    }
    draw ();
    requestAnimationFrame(update);
}

// Function to draw in the canvas
function draw () {
    // Draw the back-ground board.
    context.fillStyle = 'black';
    context.fillRect ( 0, 0, canvas.width, canvas.height );
    
    // Draw the board game.
    board.forEach( (column, j) => {
        column.forEach( (row, i) => {
            if ( row == 1) {
                context.fillStyle = 'gray';
                context.fillRect ( i, j, 1, 1 );
            }
        });
    });

    // Draw the piece in the board
    piece.getSize.forEach((column, j) => {
        column.forEach((row, i) => {
            if ( row == 1) {
                context.fillStyle = piece.getColor;
                context.fillRect ( i + piece.getPositionX, j + piece.getPositionY, 1, 1 );
            }
        });
        
    });  
}

// Activate the collision of the player
function collision ( prePosition ) {
    try{
        for (let j = piece.getPositionY; j < piece.getPositionY + piece.getSize.length; j++) {
            for (let i = piece.getPositionX; i < piece.getPositionX + piece.getSize[0].length; i++) {
                if (board[j][i] != 0){
                    piece.setPositionX = prePosition[0];
                    piece.setPositionY = prePosition[1];
                    return true;
                }   
            }
        }
    }
    catch (e) {
        piece.setPositionX = prePosition[0];
        piece.setPositionY = prePosition[1];
        return true;
    }
}

// Activate Solidify function and the create a new piece
function solidify() {
    // Put the piece in the board
    for (let j = piece.getPositionY; j < piece.getPositionY + piece.getSize.length; j++) {
        for (let i = piece.getPositionX; i < piece.getPositionX + piece.getSize[0].length; i++) {
            if (piece.getSize[j-piece.getPositionY][i-piece.getPositionX] == 1) {
                board[j][i] = 1;   
            }    
        }
        // Verify if all elements are 1 in the row.
        if (board[j].every(element => element===1)){
            board.splice(j, 1);
            board.unshift(Array(WIDTH).fill(0));
            scoreBase += SCORE;
            score.innerHTML = `Score: ${scoreBase}`;
        }
    }
    // Create a new piece
    piece = new Piece(WIDTH);
    // Check Game Over
    let preGameOver = [piece.getPositionX, piece.getPositionY];
    if (collision(preGameOver)){
        window.alert('Game Over');
        board.forEach(row=>{row.fill(0);});
        score.innerHTML = `Score: ${scoreBase}`;
    }
}

// Activate the events to the canvas
document.addEventListener('keydown', event =>{
    let preview = [piece.getPositionX, piece.getPositionY];
    switch (event.key){
        case 'ArrowRight':
            piece.incPositionX();
            collision (preview);
            break;
        case 'ArrowDown':
            piece.incPositionY();
            let colDetected = collision (preview);
            if (colDetected == true) {
                solidify();
            }
            break;
        case 'ArrowLeft':
            piece.decPositionX();
            collision (preview);
            break;
    }
});



// Reference the DOM element.
let canvas = document.getElementById('myCanvas');
let score = document.getElementById('score');
let context = canvas.getContext('2d');

// Define the size of the board game.
const BLOCK_SIZE = 10;
const WIDTH = 20;
const HEIGHT = 30;
const SCORE = 10;

// Define the variables.
let scoreBase = 0;
let moveTime = 0;
let lastTime = 0;

// Stablish the canvas dimensions.
canvas.width = WIDTH * BLOCK_SIZE;
canvas.height = HEIGHT * BLOCK_SIZE;
context.scale( BLOCK_SIZE, BLOCK_SIZE );

// Stablish the score base
score.innerHTML = `Score: ${scoreBase}`;

// Define the board game
let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Define the pieces
let piece = new Piece(WIDTH);

// Call the function update() to start the game.
update();