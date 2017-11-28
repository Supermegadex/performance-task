import Jupiter from './aidan/jupiter';
import Space from './keegan/k';

let width = 320;
let height = 450;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

class Library {
    constructor(ctx) {
        this.turtle = {
            x: width / 2,
            y: height / 2,
            color: "#000"
        }
        this.ctx = ctx;
    }
    
    moveTo(x, y) {
        this.turtle.x = x;
        this.turtle.y = y;
    }
    
    penColor(color) {
        this.ctx.fillStyle = color;
        this.turtle.color = color;
    }
    
    dot(radius) {
        ctx.beginPath();
        ctx.arc(this.turtle.x, this.turtle.y, radius, 0, Math.PI * 2, true);
        ctx.fill()
    }
}

let lib = new Library(ctx);
let jupiter = new Jupiter();
let space = new Space();

space.background(lib);
space.stars(lib);
jupiter.jupiterShape(lib);
