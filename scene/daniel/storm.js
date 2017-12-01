/*************************************************************
 * 
 * Storm drawing code for JUPITER Performance Task Practice.
 * Author: Daniel Noon.
 * (c) 2017 licensed under GPL v3.
 * 
 *************************************************************/

export default class Storm {
    constructor(lib) {
        this.lib = lib;
    }
    
    makeAnEllipse(r, g, b, sizeX, sizeY) {
        this.lib.penRGB(r, g, b);
        this.lib.ctx.beginPath();
        this.lib.ctx.ellipse(
            this.lib.width / 2 - 50,
            this.lib.height / 2 + 50,
            sizeX,
            sizeY,
            0,
            0,
            2 * Math.PI);
        this.lib.ctx.fill();
    }
    
    draw() {
        var currentState = [194, 135, 55, 25, 15];
        for (let i = 15; i > 0; i--) {
            this.makeAnEllipse(...currentState);
            currentState = currentState.map(d => d - 1);
        }
    }
}