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
    }
    start() {
        
        this.clearCanvas();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(240, 240, this.tiles, this.tiles);
        onkeydown = (e) => { this.drawSnake(e); };
    }
    pause(){
        onkeydown = (e) => { e.preventDefault; };
        this.pauze = true;
    }
    stop() {
        this.clearCanvas();
    }
    drawSnake(e){
        this.clearCanvas();
        this.snake.updatePosition(e);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.snake.snakeHeadX, this.snake.snakeHeadY, this.tiles, this.tiles);
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
    }
}

window.canvas = new Canvas();
