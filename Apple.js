export class Apple {
    constructor(screenWidth, screenHeight, appleSize) {
        this.appleSize = appleSize;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.appleX = Math.round(Math.random() * (this.screenWidth / this.appleSize)) * this.appleSize;
        this.appleY = Math.round(Math.random() * (this.screenHeight / this.appleSize)) * this.appleSize;
    }
}