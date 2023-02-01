import {Snake} from "./Snake.js";

class Canvas {
    constructor() {
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.tiles = 50;
        this.snake = new Snake();
    }
    clearCanvas() {
        this.snake.test();
        this.ctx.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
    }
}

window.canvas = new Canvas();
canvas.clearCanvas();