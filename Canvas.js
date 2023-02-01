import {Snake} from "./Snake.js";

class Canvas {
    constructor() {
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.tiles = 20;
        this.snake = new Snake();
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
    }
    start() {
        this.clearCanvas();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(225, 225, this.tiles, this.tiles);
        onkeydown = (e) => { this.drawSnake(e); };
    }
    drawSnake(e){
        this.clearCanvas();
        this.snake.updatePosition(e);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.snake.snakeHeadX, this.snake.snakeHeadY, this.tiles, this.tiles);
    }
}

window.canvas = new Canvas();
