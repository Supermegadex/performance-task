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
        var currentState = [182, 54, 15, 25, 20];
        for (let i = 15; i > 0; i--) {
            this.makeAnEllipse(...currentState);
            currentState = currentState.map((d, j) => {
                let value = d - 1;
                
                // Do special things to the colors
                if (j < 3) {
                    if (i < 5) value = d - 4;
                    if (i >= 6 && i < 8) value = d - 1;
                    if (i >= 10) value = d + 3;
                }
                
                return value;
            });
        }
    }
}