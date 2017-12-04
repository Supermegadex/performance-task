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
            // Add jupiter's y-offest to make sure the spot animates with Jupiter
            this.lib.height / 2 + 50 + jup,
            sizeX,
            sizeY,
            0,
            0,
            2 * Math.PI);
        this.lib.ctx.fill();
    }
    
    // draw:
    //      jup: Jupiter's current y-offset
    
    // Draws Jupiter's Great Red Spot.
    // Written by Daniel Noon
    
    draw(jup) {
        // Create an array with values that will be passed to makeAnEllipse and manipulated
        // <red, green, blue, x-radius, y-radius>
        let currentState = [182, 54, 15, 25, 20];
        // Make 15 ellipses, making them smaller every time.
        for (let i = 15; i > 0; i--) {
            // Call makeAnEllipse using the array of values.
            // This is an ES6 feature called "spreading" an array.
            this.makeAnEllipse(...currentState, jup);
            
            // Map the values of the array, replacing the original array with new values.
            currentState = currentState.map((d, j) => {
                // Subtract one from most of the values.
                let value = d - 1;
                
                // Do special things to the colors based on where we are in the loop.
                if (j < 3) {
                    if (i < 5) value = d - 4;
                    if (i >= 10) value = d + 3;
                }
                
                // Return the new value, which adds it to the right place in the new array.
                return value;
            });
        }
    }
}