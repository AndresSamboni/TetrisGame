export class Piece {

    // Attributes
    #position;
    #opSize;
    #size;
    #opColor;
    #color;

    // Constructor
    constructor(WIDTH) {
        this.#position = {
            x : Math.floor( Math.random()*(WIDTH - 3)),
            y : 1 
        };
        this.#opSize = [
            [
                [1, 1],
                [1, 1]
            ],
            [
                [1, 0, 0, 0],
                [1, 1, 1, 1]
            ],
            [
                [0, 1, 0],
                [1, 1, 1]
            ],
            [
                [1],
                [1],
                [1],
                [1]
            ],
            [
                [1, 1, 0],
                [0, 1, 1]
            ]
        ];
        this.#size = this.#opSize[Math.floor( Math.random()*(this.#opSize.length))];
        this.#opColor = ['yellow', 'green', 'blue', 'red'];
        this.#color = this.#opColor[Math.floor( Math.random()*(this.#opColor.length))]
    }

    // Getters and Setters Methods
    get getSize() {
      return this.#size;
    }
    get getColor() {
      return this.#color;
    }
    get getPositionX() {
      return this.#position.x;
    }
    get getPositionY() {
        return this.#position.y;
    }
    set setPositionX(x) {
        this.#position.x = x;
    }
    set setPositionY(y) {
        this.#position.y = y;
    }

    // Methods
    incPositionX() {
        this.#position.x++;
    }
    decPositionX() {
        this.#position.x--;
    }
    incPositionY() {
        this.#position.y++;
    }
}