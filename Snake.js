const UP = "up";
const DOWN = "down";
const LEFT = "left";
const RIGHT = "right";
const snakeCenterX = 240;
const snakeCenterY = 240;

export class Snake {
    constructor () {
        this.snakeBody = [];
        this.snakeHeadX = Snake.snakeCenterX;
        this.snakeHeadY = Snake.snakeCenterY;
        this.tileLength = 2;
        this.snakeDirection = Snake.up;
        this.snakePartSize = 20;
    }
    static get up() {
        return UP;
    }
    static get down() {
        return DOWN;
    }
    static get left() {
        return LEFT;
    }
    static get right() {
        return RIGHT;
    }
    static get snakeCenterX() {
        return snakeCenterX;
    }    
    static get snakeCenterY() {
        return snakeCenterY;
    }

    updateDirection(e) {
        if (e.keyCode == '38') {
            this.snakeDirection = Snake.up;
        }
        else if (e.keyCode == '40') {
            this.snakeDirection = Snake.down;
        }
        else if (e.keyCode == '37') {
            this.snakeDirection = Snake.left;
        }
        else if (e.keyCode == '39') {
            this.snakeDirection = Snake.right;
        }
        this.updatePosition();
    }
    updatePosition() {
        if (this.snakeDirection === Snake.up) {
            if(this.snakeHeadY == 0) { return }
            this.snakeHeadY -= this.snakePartSize;
        }
        else if (this.snakeDirection === Snake.down) {
            if(this.snakeHeadY == 480) { return }
            this.snakeHeadY += this.snakePartSize;
        }
        else if (this.snakeDirection === Snake.left) {
            if(this.snakeHeadX == 0) { return }
            this.snakeHeadX -= this.snakePartSize;
        }
        else if (this.snakeDirection === Snake.right) {
            if(this.snakeHeadX == 480) { return }
            this.snakeHeadX += this.snakePartSize;
        }
    }

    resetPosition(){
        console.log("reset");
        this.snakeHeadX = Snake.snakeCenterX;
        this.snakeHeadY = Snake.snakeCenterY;
        this.tileLength = 2;
        this.snakeDirection = Snake.up;
    }
}