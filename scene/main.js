import Jupiter from './aidan/jupiter';
import Space from './keegan/k';
import Library from './daniel/lib';
import init from './daniel/init';

init();
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let lib = new Library(ctx, 320, 450);
let jupiter = new Jupiter();
let space = new Space();

space.background(lib);
space.stars(lib);
jupiter.jupiterShape(lib);

console.log(lib);
