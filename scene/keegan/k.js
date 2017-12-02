/*************************************************************
 * 
 * Space drawing code for JUPITER Performance Task Practice.
 * Author: Keegan Brown.
 * (c) 2017 licensed under GPL v3.
 * 
 *************************************************************/

export default class Space {
    constructor(lib) {
        this.lib = lib;
        this.madeStars = [];
        this.makeStars(lib);
        this.makeMoons(lib);
    }
    
    makeMoons(lib) {
        this.madeMoons = [];
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
    
    stars(lib) {
        for (let i=0; i<100; i++){
            
            //move to a random point and draws stars 100 times
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
    
    background(lib){
        
        //draws background
        lib.moveTo(lib.width/2,lib.height/2);
        lib.penColor("black");
        lib.dot(500);
    }
    
    smolMoons (lib){
        
        //This function uses a for loop and if loop to create 8 moons
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
    
    flipFlop(y) {
        let difference = y - this.lib.height / 2;
        return this.lib.height / 2 - difference;
    }
    
    moons (lib){
        
        //This function uses a for loop and if loop to create 8 moons
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