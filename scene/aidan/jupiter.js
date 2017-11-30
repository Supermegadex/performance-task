export default class Jupiter {
    
    jupiterShape(lib) {
        lib.moveTo(lib.width/2,lib.height/2);
        lib.penColor("#FAF0E6");
        lib.dot(130);
    }
    
    orangeStripe(lib) {
        lib
    }
}


//how do I add parameters to the function if it is filled with "lib"?

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
