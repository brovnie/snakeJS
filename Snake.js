const UP = "up";
const DOWN = "down";
const LEFT = "left";
const RIGHT = "right";


export class Snake {
    constructor () {
        this.snakeBody = [];
        this.snakeHeadX = 240;
        this.snakeHeadY = 240;
        this.tileLength = 2;
        this.snakeDirection = "up";
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
            this.snakeHeadY -= 20;
        }
        else if (this.snakeDirection === Snake.down) {
            if(this.snakeHeadY == 480) { return }
            this.snakeHeadY += 20;
        }
        else if (this.snakeDirection === Snake.left) {
            if(this.snakeHeadX == 0) { return }
            this.snakeHeadX -= 20;
        }
        else if (this.snakeDirection === Snake.right) {
            if(this.snakeHeadX == 480) { return }
            this.snakeHeadX += 20;
        }
    }


    resetPosition(){
        this.snakeHeadX = 240;
        this.snakeHeadY = 240;
        this.tileLength = 2;
        this.snakeDirection = Snake.up;
    }
}