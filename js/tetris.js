/*
    In this space I defined all the functions that I need and I use.
*/

// Function to update a frame in the game.
function update () {
    // Call the function draw.
    draw ();
    // Game loop.
    requestAnimationFrame(update);
}

// Function to draw in the canvas
function draw () {
    // Draw the back-ground board.
    context.fillStyle = "black";
    context.fillRect ( 0, 0, canvas.width, canvas.height );
    
    // Draw the board game.
    board.forEach( (column, j) => {
        column.forEach( (row, i) => {
            // Validates whether the pixel to be drawn is an occupied pixel (1) or not (0).
            if ( row == 1) {
                context.fillStyle = "yellow";
                context.fillRect ( i, j, 1, 1 );
            }
        });
    });

    // Draw the piece in the board
    pieces.forEach((column, j) => {
        column.forEach((row, i) => {
            // Validates whether the pixel to be drawn is an occupied pixel (1) or not (0).
            if ( row == 1) {
                context.fillStyle = "red";
                context.fillRect ( WIDTH/2 - pieces[0].length/2, 0, 1, 1 );
            }
        });
        
    });  
}

// Activate the events to the canvas
document.addEventListener("keydown", event =>{
    switch (event.key){
        case "ArrowRight":
            console.log("Mover la ficha hacia derecha");
            break;
        case "ArrowDown":
            console.log("Mover la ficha hacia abajo");
            break;
        case "ArrowLeft":
            console.log("Mover la ficha hacia izquierda");
            break;
    }

});

/*
    End of the definition of functions.
*/

// Reference the canvas element.
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// Define the size of the board game.
const BLOCK_SIZE = 20;
const WIDTH = 15;
const HEIGHT = 22;

// Stablish the canvas dimensions.
canvas.width = WIDTH * BLOCK_SIZE;
canvas.height = HEIGHT * BLOCK_SIZE;
context.scale( BLOCK_SIZE, BLOCK_SIZE );

// Define the board game
let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1]
];

// Define the pieces
let pieces = [
    [1, 1],
    [1, 1]
];

// Call the function update() to start the game.
update();