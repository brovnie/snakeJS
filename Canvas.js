import {Snake} from "./Snake.js";
import {Apple} from "./Apple.js";

class Canvas {
    constructor() {
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.tiles = 20;
        this.pauze = false;
        this.time = 5;
        this.interval = null;
        this.snake = new Snake();
        this.apple = new Apple(this.canvasWidth, this.canvasHeight, this.tiles);
    }
    start() {
        this.clearCanvas();
        if(!this.pauze) {
            this.snake.resetPosition();
            this.drawApple();
        } 
        this.drawSnake();
        this.interval = setInterval( () => {  
                this.snake.updatePosition();
                this.clearCanvas();
                this.catchApple();
                this.drawSnake();
                this.drawApple();
        }, 1000 / this.time);
        onkeydown = (e) => { 
                this.moveSnake(e); 
                this.catchApple();
        };
    }
    pause() {
        onkeydown = (e) => {  };
        this.pauze = true;
    }
    stop() {
        this.clearCanvas();
        clearInterval(this.interval);
        this.snake.resetPosition();
        onkeydown = (e) => { };
        this.drawSnake();
    }
    moveSnake(e) {
        this.clearCanvas();
        this.drawApple();
        this.snake.updateDirection(e);
        this.drawSnake();
    }
    
    drawSnake(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.snake.snakeHeadX, this.snake.snakeHeadY, this.tiles, this.tiles);
    }
    drawApple() {
       this.ctx.fillStyle = "red"; 
        this.ctx.fillRect(this.apple.appleX, this.apple.appleY, this.tiles, this.tiles);
    }
    catchApple(){
        if((this.snake.snakeHeadX === this.apple.appleX) && (this.snake.snakeHeadY === this.apple.appleY)) {
            this.apple.updatePosition();
            this.drawApple();
            this.time +=5;
        }
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
    }
}

window.canvas = new Canvas();
canvas.drawSnake();
