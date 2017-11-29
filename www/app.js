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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jupiter = __webpack_require__(1);

var _jupiter2 = _interopRequireDefault(_jupiter);

var _k = __webpack_require__(2);

var _k2 = _interopRequireDefault(_k);

var _lib = __webpack_require__(3);

var _lib2 = _interopRequireDefault(_lib);

var _init = __webpack_require__(4);

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _init2.default)();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var lib = new _lib2.default(ctx, 320, 450);
var jupiter = new _jupiter2.default();
var space = new _k2.default();

space.background(lib);
space.stars(lib);
jupiter.jupiterShape(lib);

console.log(lib);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Jupiter = function () {
    function Jupiter() {
        _classCallCheck(this, Jupiter);
    }

    _createClass(Jupiter, [{
        key: "jupiterShape",
        value: function jupiterShape(lib) {
            lib.moveTo(160, 225);
            lib.penColor("#FAF0E6");
            lib.dot(130);
        }
    }]);

    return Jupiter;
}();

exports.default = Jupiter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Space = function () {
    function Space() {
        _classCallCheck(this, Space);
    }

    _createClass(Space, [{
        key: "stars",
        value: function stars(lib) {
            for (var i = 0; i < 100; i++) {
                //move to a random point and draws stars 100 times
                lib.penColor("white");
                lib.moveTo(Math.random() * 320, Math.random() * 450);
                lib.dot(Math.random() * 2);
            }
        }
    }, {
        key: "background",
        value: function background(lib) {
            //draws bacground
            lib.moveTo(160, 225);
            lib.penColor("Black");
            lib.dot(500);
        }
    }]);

    return Space;
}();

exports.default = Space;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Library = function () {
    function Library(ctx, width, height) {
        _classCallCheck(this, Library);

        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.turtle = {
            x: width / 2,
            y: height / 2,
            color: "#000",
            rot: 0,
            pen: true,
            width: 5
        };
    }

    _createClass(Library, [{
        key: "moveTo",
        value: function moveTo(x, y) {
            this.turtle.x = x;
            this.turtle.y = y;
        }
    }, {
        key: "penColor",
        value: function penColor(color) {
            this.ctx.fillStyle = color;
            this.ctx.strokeStyle = color;
            this.turtle.color = color;
        }
    }, {
        key: "dot",
        value: function dot(radius) {
            this.ctx.beginPath();
            this.ctx.arc(this.turtle.x, this.turtle.y, radius, 0, Math.PI * 2, true);
            this.ctx.fill();
        }
    }, {
        key: "turnRight",
        value: function turnRight(deg) {
            this.turtle.rot += deg || 90;
        }
    }, {
        key: "turnLeft",
        value: function turnLeft(deg) {
            this.turtle.rot -= deg || 90;
        }
    }, {
        key: "turnTo",
        value: function turnTo(deg) {
            this.turtle.rot = deg || 0;
        }
    }, {
        key: "getX",
        value: function getX() {
            return this.turtle.x;
        }
    }, {
        key: "getY",
        value: function getY() {
            return this.turtle.y;
        }
    }, {
        key: "penUp",
        value: function penUp() {
            this.turtle.pen = false;
        }
    }, {
        key: "penDown",
        value: function penDown() {
            this.turtle.pen = true;
        }
    }, {
        key: "penRGB",
        value: function penRGB(r, g, b, a) {
            if (a) {
                this.penColor("rgba(" + r + ", " + g + ", " + b + ", " + a + ")");
            } else {
                this.penColor("rgb(" + r + ", " + g + ", " + b + ")");
            }
        }
    }, {
        key: "penWidth",
        value: function penWidth(width) {
            this.ctx.lineWidth = width;
            this.turtle.width = width;
        }
    }, {
        key: "getDirection",
        value: function getDirection() {
            var dir = this.turtle.rot;
            while (dir < 0) {
                dir += 360;
            }while (dir >= 360) {
                dir -= 360;
            }return dir;
        }
    }, {
        key: "moveForward",
        value: function moveForward(dist) {
            var x1 = this.turtle.x;
            var y1 = this.turtle.y;
            var angle = this.getDirection().toRad();
            var L = dist || 25;
            var x2 = x1 + Math.sin(angle) * L;
            var y2 = y1 - Math.cos(angle) * L;
            if (this.turtle.pen) {
                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x2, y2);
                this.ctx.stroke();
            }
            this.turtle.x = x2;
            this.turtle.y = y2;
        }
    }, {
        key: "moveBackward",
        value: function moveBackward(dist) {
            var x1 = this.turtle.x;
            var y1 = this.turtle.y;
            var angle = this.getDirection().toRad();
            var L = dist || 25;
            var x2 = x1 - Math.sin(angle) * L;
            var y2 = y1 + Math.cos(angle) * L;
            if (this.turtle.pen) {
                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x2, y2);
                this.ctx.stroke();
            }
            this.turtle.x = x2;
            this.turtle.y = y2;
        }
    }, {
        key: "move",
        value: function move(x, y) {
            var x1 = this.turtle.x;
            var y1 = this.turtle.y;
            var x2 = x1 + x;
            var y2 = y1 + y;
            if (this.turtle.pen) {
                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x2, y2);
                this.ctx.stroke();
            }
            this.turtle.x = x2;
            this.turtle.y = y2;
        }
    }, {
        key: "arcRight",
        value: function arcRight(angle, radius, counterclockwise) {
            var centerAngle = counterclockwise ? -90 : 90;
            var clockwiseDegrees = counterclockwise ? -angle : angle;
            var ctx = this.ctx;
            if (ctx) {
                var centerX = this.turtle.x + radius * Math.sin(2 * Math.PI * (this.turtle.rot + centerAngle) / 360);
                var centerY = this.turtle.y - radius * Math.cos(2 * Math.PI * (this.turtle.rot + centerAngle) / 360);

                var startAngle = 2 * Math.PI * (this.turtle.rot + (counterclockwise ? 0 : 180)) / 360;
                var endAngle = startAngle + 2 * Math.PI * clockwiseDegrees / 360;

                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, startAngle, endAngle, counterclockwise);
                ctx.stroke();

                this.turtle.rot = (this.turtle.rot + clockwiseDegrees + 360) % 360;
                var xMovement = radius * Math.cos(2 * Math.PI * this.turtle.rot / 360);
                var yMovement = radius * Math.sin(2 * Math.PI * this.turtle.rot / 360);
                this.turtle.x = centerX + (counterclockwise ? xMovement : -xMovement);
                this.turtle.y = centerY + (counterclockwise ? yMovement : -yMovement);
            }
        }
    }, {
        key: "arcLeft",
        value: function arcLeft(angle, radius) {
            this.arcRight(angle, radius, true);
        }
    }]);

    return Library;
}();

exports.default = Library;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = init;
function init() {
    if (typeof Number.prototype.toRad === "undefined") {
        Number.prototype.toRad = function () {
            return this * Math.PI / 180;
        };
    }
    if (typeof Number.prototype.toDeg === "undefined") {
        Number.prototype.toDeg = function () {
            return this * 180 / Math.PI;
        };
    }
}

/***/ })
/******/ ]);