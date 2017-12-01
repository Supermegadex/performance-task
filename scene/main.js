/*************************************************************
 * 
 * Entry point for JUPITER Performance Task Practice.
 * Author: Daniel Noon.
 * (c) 2017 licensed under GPL v3.
 * 
 *************************************************************/

 // Import required modules.
import Jupiter from './aidan/jupiter';
import Space from './keegan/k';
import Library from './daniel/lib';

// Create the canvas context for use of the library.
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Initialize the library with the canvas's 2D context
let lib = new Library(ctx, 320, 568);

// Create an instance of Aidan's Jupiter class.
let jupiter = new Jupiter(lib);

// Create an instance of Keegan's Space class.
let space = new Space(lib);

// Run the necessary methods to draw the pictures.
space.background(lib);
space.stars(lib);
jupiter.jupiterShape(lib);

// Log the Library instance to the console for debugging (will be removed).
console.log(lib);
