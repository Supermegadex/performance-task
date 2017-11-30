import Jupiter from './aidan/jupiter';
import Space from './keegan/k';
import Library from './daniel/lib';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let lib = new Library(ctx, 320, 568);
let jupiter = new Jupiter(lib);
let space = new Space(lib);

space.background(lib);
space.stars(lib);
jupiter.jupiterShape(lib);

console.log(lib);
