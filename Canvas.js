import {Snake} from "./Snake.js";

class Canvas {
    constructor() {
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.tiles = 20;
        this.snake = new Snake();
        this.pauze = false;
        this.time = 1;
    }
    start() {
        this.clearCanvas();
        if(!this.pauze) {
            this.snake.resetPosition();
        } 
        this.drawSnake();
        onkeydown = (e) => { this.moveSnake(e); };
    }
    pause() {
        onkeydown = (e) => {  };
        this.pauze = true;
    }
    stop() {
        this.clearCanvas();
        this.snake.resetPosition();
    }
    drawSnake(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.snake.snakeHeadX, this.snake.snakeHeadY, this.tiles, this.tiles);
    }
    moveSnake(e) {
        this.clearCanvas();
        this.snake.updatePosition(e);
        this.drawSnake();
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
    }
}

window.canvas = new Canvas();
