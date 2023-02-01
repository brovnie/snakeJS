export class Snake {
    constructor () {
        this.snakeBody = [];
        this.snakeHeadX = 240;
        this.snakeHeadY = 240;
        this.tileLength = 2;     
    }
    updatePosition(e) {
        if (e.keyCode == '38') {
            this.snakeHeadY -= 20;
        }
        else if (e.keyCode == '40') {
            this.snakeHeadY += 20;
                        console.log(this.snakeHeadY)
        }
        else if (e.keyCode == '37') {
            this.snakeHeadX -= 20;
        }
        else if (e.keyCode == '39') {
            this.snakeHeadX += 20;
        }
    }
}