export class Snake {
    constructor () {
        this.snakeBody = [];
        this.snakeHeadX = 240;
        this.snakeHeadY = 240;
        this.tileLength = 2;     
    }
    updatePosition(e) {
        if (e.keyCode == '38') {
            if(this.snakeHeadY == 0) { return }
            this.snakeHeadY -= 20;
        }
        else if (e.keyCode == '40') {
                        if(this.snakeHeadY == 480) { return }
            this.snakeHeadY += 20;
        }
        else if (e.keyCode == '37') {
                        if(this.snakeHeadX == 0) { return }
            this.snakeHeadX -= 20;
        }
        else if (e.keyCode == '39') {
                        if(this.snakeHeadX == 480) { return }
            this.snakeHeadX += 20;
        }
    }
    resetPosition(){
        this.snakeHeadX = 240;
        this.snakeHeadY = 240;
        this.tileLength = 2;
    }
}