/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aidan_jupiter__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keegan_k__ = __webpack_require__(2);



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
let jupiter = new __WEBPACK_IMPORTED_MODULE_0__aidan_jupiter__["a" /* default */]();
let space = new __WEBPACK_IMPORTED_MODULE_1__keegan_k__["a" /* default */]();

space.background(lib);
space.stars(lib);
jupiter.jupiterShape(lib);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Jupiter {
    
    jupiterShape(lib) {
        lib.moveTo(160,225);
        lib.penColor("#FAF0E6");
        lib.dot(130);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Jupiter;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Space {
    stars(lib) {
        for (let i=0; i<100; i++){
            //move to a random point and draws stars 100 times
            lib.penColor("white");
            lib.moveTo(Math.random()*320,Math.random()*450);
            lib.dot(Math.random()*2);
        }
    }
    background(lib){
        //draws bacground
        lib.moveTo(160,225);
        lib.penColor("Black");
        lib.dot(500);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Space;


/***/ })
/******/ ]);