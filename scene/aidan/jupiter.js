/*************************************************************
 * 
 * Jupiter drawing code for JUPITER Performance Task Practice.
 * Authors: Keegan Brown, Aidan Buechler, and Daniel Noon.
 * (c) 2017 licensed under GPL v3.
 * 
 *************************************************************/

export default class Jupiter {
    
    // constructor:
    //      lib: code.org library
    
    // Instantiates the object with initial values
    // Written by Daniel Noon
    
    constructor(lib) {
        this.jupiter = {
            x: lib.width / 2, 
            y: 0,
            up: true
        };
        this.tick = 0;
    }
    
    // ease:
    //      t: time between 0 and 1.
    
    // Quadratic ease-in-out function to ease the rising and falling of Jupiter.
    // Written by @gre on GitHub Gist
    
    ease(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t }
    
    // jupiterShape:
    //      lib: code.org library
    
    // Draws the circle for the base of Jupiter. Then, it calls the drawStripes method, passing in the library as a parameter.
    // Written by Aidan Buechler with edits by Daniel Noon
    
    jupiterShape(lib) {
        lib.moveTo(this.jupiter.x, lib.height / 2 + this.jupiter.y);
        lib.penColor("#98826D");
        lib.dot(130);
        this.drawStripes(lib);
        return this.moveJupiter(lib);
    }
    
    // moveJupiter:
    //      lib: code.org library
    
    // Moves Jupiter up and down.
    // Written by Daniel Noon
    
    moveJupiter(lib) {
        this.tick += this.jupiter.up ? -.01 : .01;
        this.jupiter.y = this.ease(this.tick) * 10 - 5;
        if (this.tick >= 1) {
            this.jupiter.up = true;
        }
        if (this.tick <= 0) {
            this.jupiter.up = false;
        }
        return this.jupiter.y;
    }
    
    // drawStripes
    //      lib: code.org library
    
    // Uses the stripe method to draw all the stripes on Jupiter's surface.
    // Written by all contributors
    
    drawStripes(lib) {
        this.stripe(lib, [52, 218 + this.jupiter.y], 7, "#B0804F", [9, 1370], 0);
        this.stripe(lib, [48, 225 + this.jupiter.y], 7, "#B0804F", [9, 1415], 0);
        this.stripe(lib, [45, 240 + this.jupiter.y], 15, "#994d00", [8, 1642], .5);
        this.stripe(lib, [44, 230 + this.jupiter.y], 5, "#C6DAEF", [8, 1650]);
        this.stripe(lib, [41, 310 + this.jupiter.y], 17, "#994d00", [7.8, 1762], 7.8, 1);
        this.stripe(lib, [44, 285 + this.jupiter.y], 30, "#C6DAEF", [1, 13200], 3.7);
        this.stripe(lib, [55, 211 + this.jupiter.y], 5, "#C6DAEF", [8, 1487]);
        this.stripe(lib, [260, 350 + this.jupiter.y], 22, "#4E4036", [6, 1880], 181);
    }
    
    // stripe
    //      lib: code.org library
    //      coord: location of where to start the arc (array<x, y>)
    //      width: width of the arc (number)
    //      color: hex or named color value of the arc (string)
    //      arc: angle and radius of the arc to be drawn (array<angle, radius>)
    //      rot: rotation of the turtle before drawing the arc (number)
    //      left: whether or not to use arcLeft as opposed to arcRight (boolean)
    
    // Draws a single stripe on Jupiter's surface.
    // Written by Aidan Buechler
    
    stripe(lib, coord, width, color, arc, rot, left) {
        lib.turnTo(rot);
        lib.penUp();
        lib.penWidth(width);
        lib.penColor(color);
        lib.moveTo(coord[0], coord[1]);
        lib.turnRight(85);
        lib.penDown();
        left ? lib.arcLeft(arc[0], arc[1]) : lib.arcRight(arc[0], arc[1]);
        lib.turnTo(0);
    }
    
}














/**
 * The following are some examples that I wrote to satisfy Aidan's question:
 * How do I add parameters to the function if it is filled with "lib?"
*/

////////////////////////////////////////////////////////////////////////////

//Parameters cannot be "filled." You can do orangeStripe(lib, otherParameter).
//Also, if you want to call orangeStripe from somewhere inside your class, you can include `lib` as a parameter pass-through, like so:

export class ExampleJupiter1 {
    
    jupiterShape(lib) {
        lib.moveTo(lib.width/2,lib.height/2);
        lib.penColor("#FAF0E6");
        lib.dot(130);
        this.orangeStripe(lib, 5);
    }
    orangeStripe(lib, otherParameter) {
        lib.arcRight(110, otherParameter);
    }
}

// If it is more convenient, we can eliminate `lib` as a parameter altogether and include it as a "member" of the class,
// but that requires using `this`, which takes five extra keystrokes whenever you want to use the library.

export class ExampleJupiter2 {
    
    constructor(lib) {
        this.lib = lib;
    }
    
    jupiterShape() {
        this.lib.moveTo(this.lib.width/2,this.lib.height/2);
        this.lib.penColor("#FAF0E6");
        this.lib.dot(130);
        this.orangeStripe(5);
    }
    orangeStripe(otherParameter) {
        this.lib.arcRight(110, otherParameter);
    }
}

/*
    Explanation
    -----------
    when the program is run, I "instantiate" each of our classes.
    When that happens, your code becomes something that I can actually use in main.js--something I can call on and it does something to the website.
    You can see this when I write `let jupiter = new Jupiter(lib);`.
    The `new` keyword is what tells Javascript to "instantiate" your class.
    When Javascript instantiates a class, it calls the `constructor` method (a function that is inside of a class) with any parameters that are given (in this case, `lib`).
    In the constructor shown above, it only does one thing, assign the parameter `lib` to the class property `this.lib`.
    A class property is a variable that belongs to a specific instance of a class (there can be multiple independent instances of any given class).
    Because of this, we could, in theory, make a bunch of Jupiter instances, all with a different sized canvas to work with.
*/
