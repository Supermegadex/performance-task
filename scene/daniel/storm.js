/*************************************************************
 * 
 * Storm drawing code for JUPITER Performance Task Practice.
 * Author: Daniel Noon.
 * (c) 2017 licensed under GPL v3.
 * 
 *************************************************************/

export default class Storm {
    
    // constructor:
    //      lib: code.org library
    
    // Instantiates the object with initial values.
    // Written by Daniel Noon
    
    constructor(lib) {
        this.lib = lib;
    }
    
    // makeAnEllipse:
    //      r: Red intensity of the ellipse
    //      g: Green intensity of the ellipse
    //      b: Blue intensity of the ellipse
    //      sizeX: Radius of the ellipse in the X direction
    //      sizeY: Radius of the ellipse in the Y direction
    //      jup: Jupiter's current y-offset
    
    // Draws one of the 15 ellipses that make up Jupiter's spot.
    // Written by Daniel Noon
    
    makeAnEllipse(r, g, b, sizeX, sizeY, jup) {
        this.lib.penRGB(r, g, b);
        this.lib.ctx.beginPath();
        this.lib.ctx.ellipse(
            this.lib.width / 2 - 50,
            this.lib.height / 2 + 50 + jup, // Add jupiter's y-offest to make sure the spot animates with Jupiter
            sizeX,
            sizeY,
            0,
            0,
            2 * Math.PI);
        this.lib.ctx.fill();
    }
    
    // draw:
    //      jup: Jupiter's current y-offset
    
    // Instantiates the object with initial values.
    // Written by Daniel Noon
    
    draw(jup) {
        var currentState = [182, 54, 15, 25, 20];
        for (let i = 15; i > 0; i--) {
            this.makeAnEllipse(...currentState, jup);
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