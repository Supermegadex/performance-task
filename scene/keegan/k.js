/*************************************************************
 * 
 * Space drawing code for JUPITER Performance Task Practice.
 * Author: Keegan Brown.
 * (c) 2017 licensed under GPL v3.
 * 
 *************************************************************/

export default class Space {
    
    // constructor:
    //      lib: code.org library
    
    // Instantiates the object with initial values
    // Written by Daniel Noon
    
    constructor(lib) {
        this.lib = lib;
        this.madeStars = [];
        this.madeMoons = [];
        this.makeStars(lib);
        this.makeMoons(lib);
    }
    
    // makeMoons:
    //      lib: code.org library
    
    // Create seven moons with semi-random coordinates, size, and color.
    // Then, store them in an array for use while drawing.
    // Written by Keegan Brown and Daniel Noon
    
    makeMoons(lib) {
        for (var i=0;i<7;i++) {
            let newMoon = {
                s: Math.random()*12,
                x: Math.random()*(lib.width),
                y: lib.randomNumber(50, lib.height - 50),
                r: 62+lib.randomNumber(0,50),
                g: 39+lib.randomNumber(0,30),
                b: 35+lib.randomNumber(0,20)
            };
            this.madeMoons.push(newMoon);
        }
    }
    
    // makeStars:
    //      lib: code.org library
    
    // Create 100 stars with semi-random coordinates and size.
    // Then, store them in an array for use while drawing.
    // Written by Keegan Brown and Daniel Noon
    
    makeStars(lib) {
        for (let i=0; i<100; i++){
            let newStar = {
                x: Math.random()*lib.width,
                y: Math.random()*lib.height,
                size: Math.random()*3
            };
            this.madeStars.push(newStar);
        }
    }
    
    // background:
    //      lib: code.org library
    
    // Draw a big black dot for the background of the void of space.
    // Written by Keegan Brown
    
    background(lib){
        
        //draws background
        lib.moveTo(lib.width/2,lib.height/2);
        lib.penColor("black");
        lib.dot(500);
    }
    
    // stars:
    //      lib: code.org library
    
    // Draw the stars, then move the stars to the right for the next frame. It then calls smolMoons for convenience.
    // Written by Keegan Brown with edits by Daniel Noon
    
    stars(lib) {
        for (let i=0; i<100; i++){
            var star = this.madeStars[i];
            lib.penColor("white");
            lib.moveTo(star.x,star.y);
            lib.dot(star.size);
            star.x += .25;
            if (star.x > this.lib.width + 5) {
                star.x = -5;
                star.y = Math.random()*lib.height;
                star.size = Math.random()*3;
            }
        }
        this.smolMoons(lib);
    }
    
    // flipFlop:
    //      y: y-coordinate to mirror over the center of the canvas.
    
    // Helper function to abstract the task of mirroring the height of a moon to simulate an orbit.
    // Written by Daniel Noon
    
    flipFlop(y) {
        let difference = y - this.lib.height / 2;
        return this.lib.height / 2 - difference;
    }
    
    // smolMoons:
    //      lib: code.org library
    
    // Draws all the moons that are smaller than 6 pixels in radius.
    // Then, it moves them to the right before checking if it should change the moon into a big moon.
    // Written by Keegan Brown
    
    smolMoons (lib){
        for (var i=0;i<7;i++){
            let moon = this.madeMoons[i];
            var size = moon.s;
            lib.moveTo(moon.x, moon.y);
            lib.penRGB(moon.r, moon.g, moon.b);
            let movingLeft = false;
            let behind = false;
            
            if (moon.s < 6) {
                movingLeft = false;
                behind = true;
            }
            
            else {
                movingLeft = true;
                behind = false;
            }
            
            if (movingLeft) moon.x -= .5;
            else moon.x += .5;
            
            if (behind) lib.dot(size);
        }
    }
    
    // moons:
    //      lib: code.org library
    
    // Draws all the moons that are larger than or equal to 6 pixels in radius.
    // Then, it moves them to the left before checking if it should change one into a small moon.
    // Written by Keegan Brown
    
    moons (lib){
        for (var i=0;i<7;i++){
            let moon = this.madeMoons[i];
            var size = moon.s;
            lib.moveTo(moon.x, moon.y);
            lib.penRGB(moon.r, moon.g, moon.b);
            let movingLeft = false;
            let behind = false;
            
            if (moon.s < 6) {
                movingLeft = false;
                behind = true;
            }
            
            else {
                movingLeft = true;
                behind = false;
            }
            
            if (movingLeft) moon.x -= .3;
            else moon.x += .6;
            
            if (!behind) lib.dot(size);
            if (movingLeft && moon.x <= -25) {
                moon.s -= 6;
                moon.y = this.flipFlop(moon.y);
            }
            if (!movingLeft && moon.x >= lib.width + 25) {
                moon.s += 6;
                moon.y = this.flipFlop(moon.y);
            }
        }
    }
}