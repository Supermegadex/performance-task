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
/*!***********************!*\
  !*** ./scene/main.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aidan_jupiter__ = __webpack_require__(/*! ./aidan/jupiter */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keegan_k__ = __webpack_require__(/*! ./keegan/k */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daniel_lib__ = __webpack_require__(/*! ./daniel/lib */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daniel_init__ = __webpack_require__(/*! ./daniel/init */ 4);\n\n\n\n\n\nObject(__WEBPACK_IMPORTED_MODULE_3__daniel_init__[\"a\" /* default */])();\nlet canvas = document.getElementById('canvas');\nlet ctx = canvas.getContext('2d');\n\nlet lib = new __WEBPACK_IMPORTED_MODULE_2__daniel_lib__[\"a\" /* default */](ctx, 320, 450);\nlet jupiter = new __WEBPACK_IMPORTED_MODULE_0__aidan_jupiter__[\"a\" /* default */]();\nlet space = new __WEBPACK_IMPORTED_MODULE_1__keegan_k__[\"a\" /* default */]();\n\nspace.background(lib);\nspace.stars(lib);\njupiter.jupiterShape(lib);\n\nconsole.log(lib);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjZW5lL21haW4uanM/NDY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSnVwaXRlciBmcm9tICcuL2FpZGFuL2p1cGl0ZXInO1xuaW1wb3J0IFNwYWNlIGZyb20gJy4va2VlZ2FuL2snO1xuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi9kYW5pZWwvbGliJztcbmltcG9ydCBpbml0IGZyb20gJy4vZGFuaWVsL2luaXQnO1xuXG5pbml0KCk7XG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5sZXQgbGliID0gbmV3IExpYnJhcnkoY3R4LCAzMjAsIDQ1MCk7XG5sZXQganVwaXRlciA9IG5ldyBKdXBpdGVyKCk7XG5sZXQgc3BhY2UgPSBuZXcgU3BhY2UoKTtcblxuc3BhY2UuYmFja2dyb3VuZChsaWIpO1xuc3BhY2Uuc3RhcnMobGliKTtcbmp1cGl0ZXIuanVwaXRlclNoYXBlKGxpYik7XG5cbmNvbnNvbGUubG9nKGxpYik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NjZW5lL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************!*\
  !*** ./scene/aidan/jupiter.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Jupiter {\n    \n    jupiterShape(lib) {\n        lib.moveTo(160,225);\n        lib.penColor(\"#FAF0E6\");\n        lib.dot(130);\n    }\n    \n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Jupiter;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjZW5lL2FpZGFuL2p1cGl0ZXIuanM/Y2EwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBKdXBpdGVyIHtcbiAgICBcbiAgICBqdXBpdGVyU2hhcGUobGliKSB7XG4gICAgICAgIGxpYi5tb3ZlVG8oMTYwLDIyNSk7XG4gICAgICAgIGxpYi5wZW5Db2xvcihcIiNGQUYwRTZcIik7XG4gICAgICAgIGxpYi5kb3QoMTMwKTtcbiAgICB9XG4gICAgXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NjZW5lL2FpZGFuL2p1cGl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************!*\
  !*** ./scene/keegan/k.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Space {\n    stars(lib) {\n        for (let i=0; i<100; i++){\n            //move to a random point and draws stars 100 times\n            lib.penColor(\"white\");\n            lib.moveTo(Math.random()*320,Math.random()*450);\n            lib.dot(Math.random()*2);\n        }\n    }\n    background(lib){\n        //draws bacground\n        lib.moveTo(160,225);\n        lib.penColor(\"Black\");\n        lib.dot(500);\n    }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Space;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjZW5lL2tlZWdhbi9rLmpzP2Q1M2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhY2Uge1xuICAgIHN0YXJzKGxpYikge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTAwOyBpKyspe1xuICAgICAgICAgICAgLy9tb3ZlIHRvIGEgcmFuZG9tIHBvaW50IGFuZCBkcmF3cyBzdGFycyAxMDAgdGltZXNcbiAgICAgICAgICAgIGxpYi5wZW5Db2xvcihcIndoaXRlXCIpO1xuICAgICAgICAgICAgbGliLm1vdmVUbyhNYXRoLnJhbmRvbSgpKjMyMCxNYXRoLnJhbmRvbSgpKjQ1MCk7XG4gICAgICAgICAgICBsaWIuZG90KE1hdGgucmFuZG9tKCkqMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmFja2dyb3VuZChsaWIpe1xuICAgICAgICAvL2RyYXdzIGJhY2dyb3VuZFxuICAgICAgICBsaWIubW92ZVRvKDE2MCwyMjUpO1xuICAgICAgICBsaWIucGVuQ29sb3IoXCJCbGFja1wiKTtcbiAgICAgICAgbGliLmRvdCg1MDApO1xuICAgIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NjZW5lL2tlZWdhbi9rLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./scene/daniel/lib.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Library {\n    constructor(ctx, width, height) {\n        this.ctx = ctx;\n        this.width = width;\n        this.height = height;\n        this.turtle = {\n            x: width / 2,\n            y: height / 2,\n            color: \"#000\",\n            rot: 0,\n            pen: true,\n            width: 5\n        };\n    }\n    \n    moveTo(x, y) {\n        this.turtle.x = x;\n        this.turtle.y = y;\n    }\n    \n    penColor(color) {\n        this.ctx.fillStyle = color;\n        this.ctx.strokeStyle = color;\n        this.turtle.color = color;\n    }\n    \n    dot(radius) {\n        this.ctx.beginPath();\n        this.ctx.arc(this.turtle.x, this.turtle.y, radius, 0, Math.PI * 2, true);\n        this.ctx.fill();\n    }\n    \n    turnRight(deg) {\n        this.turtle.rot += deg || 90;\n    }\n    \n    turnLeft(deg) {\n        this.turtle.rot -= deg || 90;\n    }\n    \n    turnTo(deg) {\n        this.turtle.rot = deg || 0;\n    }\n    \n    getX() {\n        return this.turtle.x;\n    }\n    \n    getY() {\n        return this.turtle.y;\n    }\n    \n    penUp() {\n        this.turtle.pen = false;\n    }\n    \n    penDown() {\n        this.turtle.pen = true;\n    }\n    \n    penRGB(r, g, b, a) {\n        if (a) {\n            this.penColor(`rgba(${r}, ${g}, ${b}, ${a})`);\n        }\n        else {\n            this.penColor(`rgb(${r}, ${g}, ${b})`);\n        }\n    }\n    \n    penWidth(width) {\n        this.ctx.lineWidth = width;\n        this.turtle.width = width;\n    }\n    \n    getDirection() {\n        let dir = this.turtle.rot;\n        while (dir < 0) dir += 360;\n        while (dir >= 360) dir -= 360;\n        return dir;\n    }\n    \n    moveForward(dist) {\n        let x1 = this.turtle.x;\n        let y1 = this.turtle.y;\n        let angle = this.getDirection().toRad();\n        let L = dist || 25;\n        let x2 = x1 + Math.sin(angle) * L;\n        let y2 = y1 - Math.cos(angle) * L;\n        if (this.turtle.pen) {\n            this.ctx.beginPath();\n            this.ctx.moveTo(x1, y1);\n            this.ctx.lineTo(x2, y2);\n            this.ctx.stroke();\n        }\n        this.turtle.x = x2;\n        this.turtle.y = y2;\n    }\n    \n    moveBackward(dist) {\n        let x1 = this.turtle.x;\n        let y1 = this.turtle.y;\n        let angle = this.getDirection().toRad();\n        let L = dist || 25;\n        let x2 = x1 - Math.sin(angle) * L;\n        let y2 = y1 + Math.cos(angle) * L;\n        if (this.turtle.pen) {\n            this.ctx.beginPath();\n            this.ctx.moveTo(x1, y1);\n            this.ctx.lineTo(x2, y2);\n            this.ctx.stroke();\n        }\n        this.turtle.x = x2;\n        this.turtle.y = y2;\n    }\n    \n    move(x, y) {\n        let x1 = this.turtle.x;\n        let y1 = this.turtle.y;\n        let x2 = x1 + x;\n        let y2 = y1 + y;\n        if (this.turtle.pen) {\n            this.ctx.beginPath();\n            this.ctx.moveTo(x1, y1);\n            this.ctx.lineTo(x2, y2);\n            this.ctx.stroke();\n        }\n        this.turtle.x = x2;\n        this.turtle.y = y2;\n    }\n    \n    arcRight(angle, radius, counterclockwise) {\n        var centerAngle = counterclockwise ? -90 : 90;\n        var clockwiseDegrees = counterclockwise ? -angle : angle;\n        var ctx = this.ctx;\n        if (ctx) {\n        var centerX = this.turtle.x +\n              radius * Math.sin(2 * Math.PI * (this.turtle.rot + centerAngle) / 360);\n            var centerY = this.turtle.y -\n              radius * Math.cos(2 * Math.PI * (this.turtle.rot + centerAngle) / 360);\n        \n            var startAngle =\n              2 * Math.PI * (this.turtle.rot + (counterclockwise ? 0 : 180)) / 360;\n            var endAngle = startAngle + (2 * Math.PI * clockwiseDegrees / 360);\n        \n            ctx.beginPath();\n            ctx.arc(centerX, centerY, radius, startAngle, endAngle, counterclockwise);\n            ctx.stroke();\n        \n            this.turtle.rot = (this.turtle.rot + clockwiseDegrees + 360) % 360;\n            var xMovement = radius * Math.cos(2 * Math.PI * this.turtle.rot / 360);\n            var yMovement = radius * Math.sin(2 * Math.PI * this.turtle.rot / 360);\n            this.turtle.x = centerX + (counterclockwise ? xMovement : -xMovement);\n            this.turtle.y = centerY + (counterclockwise ? yMovement : -yMovement);\n        }\n    }\n    \n    arcLeft(angle, radius) {\n        this.arcRight(angle, radius, true);\n    }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Library;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjZW5lL2RhbmllbC9saWIuanM/NjM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaWJyYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudHVydGxlID0ge1xuICAgICAgICAgICAgeDogd2lkdGggLyAyLFxuICAgICAgICAgICAgeTogaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgIHJvdDogMCxcbiAgICAgICAgICAgIHBlbjogdHJ1ZSxcbiAgICAgICAgICAgIHdpZHRoOiA1XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIHRoaXMudHVydGxlLnggPSB4O1xuICAgICAgICB0aGlzLnR1cnRsZS55ID0geTtcbiAgICB9XG4gICAgXG4gICAgcGVuQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMudHVydGxlLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIFxuICAgIGRvdChyYWRpdXMpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnR1cnRsZS54LCB0aGlzLnR1cnRsZS55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cbiAgICBcbiAgICB0dXJuUmlnaHQoZGVnKSB7XG4gICAgICAgIHRoaXMudHVydGxlLnJvdCArPSBkZWcgfHwgOTA7XG4gICAgfVxuICAgIFxuICAgIHR1cm5MZWZ0KGRlZykge1xuICAgICAgICB0aGlzLnR1cnRsZS5yb3QgLT0gZGVnIHx8IDkwO1xuICAgIH1cbiAgICBcbiAgICB0dXJuVG8oZGVnKSB7XG4gICAgICAgIHRoaXMudHVydGxlLnJvdCA9IGRlZyB8fCAwO1xuICAgIH1cbiAgICBcbiAgICBnZXRYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50dXJ0bGUueDtcbiAgICB9XG4gICAgXG4gICAgZ2V0WSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHVydGxlLnk7XG4gICAgfVxuICAgIFxuICAgIHBlblVwKCkge1xuICAgICAgICB0aGlzLnR1cnRsZS5wZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcGVuRG93bigpIHtcbiAgICAgICAgdGhpcy50dXJ0bGUucGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgcGVuUkdCKHIsIGcsIGIsIGEpIHtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIHRoaXMucGVuQ29sb3IoYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthfSlgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGVuQ29sb3IoYHJnYigke3J9LCAke2d9LCAke2J9KWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHBlbldpZHRoKHdpZHRoKSB7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLnR1cnRsZS53aWR0aCA9IHdpZHRoO1xuICAgIH1cbiAgICBcbiAgICBnZXREaXJlY3Rpb24oKSB7XG4gICAgICAgIGxldCBkaXIgPSB0aGlzLnR1cnRsZS5yb3Q7XG4gICAgICAgIHdoaWxlIChkaXIgPCAwKSBkaXIgKz0gMzYwO1xuICAgICAgICB3aGlsZSAoZGlyID49IDM2MCkgZGlyIC09IDM2MDtcbiAgICAgICAgcmV0dXJuIGRpcjtcbiAgICB9XG4gICAgXG4gICAgbW92ZUZvcndhcmQoZGlzdCkge1xuICAgICAgICBsZXQgeDEgPSB0aGlzLnR1cnRsZS54O1xuICAgICAgICBsZXQgeTEgPSB0aGlzLnR1cnRsZS55O1xuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmdldERpcmVjdGlvbigpLnRvUmFkKCk7XG4gICAgICAgIGxldCBMID0gZGlzdCB8fCAyNTtcbiAgICAgICAgbGV0IHgyID0geDEgKyBNYXRoLnNpbihhbmdsZSkgKiBMO1xuICAgICAgICBsZXQgeTIgPSB5MSAtIE1hdGguY29zKGFuZ2xlKSAqIEw7XG4gICAgICAgIGlmICh0aGlzLnR1cnRsZS5wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHVydGxlLnggPSB4MjtcbiAgICAgICAgdGhpcy50dXJ0bGUueSA9IHkyO1xuICAgIH1cbiAgICBcbiAgICBtb3ZlQmFja3dhcmQoZGlzdCkge1xuICAgICAgICBsZXQgeDEgPSB0aGlzLnR1cnRsZS54O1xuICAgICAgICBsZXQgeTEgPSB0aGlzLnR1cnRsZS55O1xuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmdldERpcmVjdGlvbigpLnRvUmFkKCk7XG4gICAgICAgIGxldCBMID0gZGlzdCB8fCAyNTtcbiAgICAgICAgbGV0IHgyID0geDEgLSBNYXRoLnNpbihhbmdsZSkgKiBMO1xuICAgICAgICBsZXQgeTIgPSB5MSArIE1hdGguY29zKGFuZ2xlKSAqIEw7XG4gICAgICAgIGlmICh0aGlzLnR1cnRsZS5wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHVydGxlLnggPSB4MjtcbiAgICAgICAgdGhpcy50dXJ0bGUueSA9IHkyO1xuICAgIH1cbiAgICBcbiAgICBtb3ZlKHgsIHkpIHtcbiAgICAgICAgbGV0IHgxID0gdGhpcy50dXJ0bGUueDtcbiAgICAgICAgbGV0IHkxID0gdGhpcy50dXJ0bGUueTtcbiAgICAgICAgbGV0IHgyID0geDEgKyB4O1xuICAgICAgICBsZXQgeTIgPSB5MSArIHk7XG4gICAgICAgIGlmICh0aGlzLnR1cnRsZS5wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHVydGxlLnggPSB4MjtcbiAgICAgICAgdGhpcy50dXJ0bGUueSA9IHkyO1xuICAgIH1cbiAgICBcbiAgICBhcmNSaWdodChhbmdsZSwgcmFkaXVzLCBjb3VudGVyY2xvY2t3aXNlKSB7XG4gICAgICAgIHZhciBjZW50ZXJBbmdsZSA9IGNvdW50ZXJjbG9ja3dpc2UgPyAtOTAgOiA5MDtcbiAgICAgICAgdmFyIGNsb2Nrd2lzZURlZ3JlZXMgPSBjb3VudGVyY2xvY2t3aXNlID8gLWFuZ2xlIDogYW5nbGU7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICB2YXIgY2VudGVyWCA9IHRoaXMudHVydGxlLnggK1xuICAgICAgICAgICAgICByYWRpdXMgKiBNYXRoLnNpbigyICogTWF0aC5QSSAqICh0aGlzLnR1cnRsZS5yb3QgKyBjZW50ZXJBbmdsZSkgLyAzNjApO1xuICAgICAgICAgICAgdmFyIGNlbnRlclkgPSB0aGlzLnR1cnRsZS55IC1cbiAgICAgICAgICAgICAgcmFkaXVzICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiAodGhpcy50dXJ0bGUucm90ICsgY2VudGVyQW5nbGUpIC8gMzYwKTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RhcnRBbmdsZSA9XG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJICogKHRoaXMudHVydGxlLnJvdCArIChjb3VudGVyY2xvY2t3aXNlID8gMCA6IDE4MCkpIC8gMzYwO1xuICAgICAgICAgICAgdmFyIGVuZEFuZ2xlID0gc3RhcnRBbmdsZSArICgyICogTWF0aC5QSSAqIGNsb2Nrd2lzZURlZ3JlZXMgLyAzNjApO1xuICAgICAgICBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgY291bnRlcmNsb2Nrd2lzZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgdGhpcy50dXJ0bGUucm90ID0gKHRoaXMudHVydGxlLnJvdCArIGNsb2Nrd2lzZURlZ3JlZXMgKyAzNjApICUgMzYwO1xuICAgICAgICAgICAgdmFyIHhNb3ZlbWVudCA9IHJhZGl1cyAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogdGhpcy50dXJ0bGUucm90IC8gMzYwKTtcbiAgICAgICAgICAgIHZhciB5TW92ZW1lbnQgPSByYWRpdXMgKiBNYXRoLnNpbigyICogTWF0aC5QSSAqIHRoaXMudHVydGxlLnJvdCAvIDM2MCk7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZS54ID0gY2VudGVyWCArIChjb3VudGVyY2xvY2t3aXNlID8geE1vdmVtZW50IDogLXhNb3ZlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZS55ID0gY2VudGVyWSArIChjb3VudGVyY2xvY2t3aXNlID8geU1vdmVtZW50IDogLXlNb3ZlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYXJjTGVmdChhbmdsZSwgcmFkaXVzKSB7XG4gICAgICAgIHRoaXMuYXJjUmlnaHQoYW5nbGUsIHJhZGl1cywgdHJ1ZSk7XG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2NlbmUvZGFuaWVsL2xpYi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************!*\
  !*** ./scene/daniel/init.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = init;\nfunction init() {\n    if (typeof(Number.prototype.toRad) === \"undefined\") {\n        Number.prototype.toRad = function() {\n            return this * Math.PI / 180;\n        }\n    }\n    if (typeof(Number.prototype.toDeg) === \"undefined\") {\n        Number.prototype.toDeg = function() {\n            return this * 180 / Math.PI;\n        }\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjZW5lL2RhbmllbC9pbml0LmpzP2I0NDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAodHlwZW9mKE51bWJlci5wcm90b3R5cGUudG9SYWQpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIE51bWJlci5wcm90b3R5cGUudG9SYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mKE51bWJlci5wcm90b3R5cGUudG9EZWcpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIE51bWJlci5wcm90b3R5cGUudG9EZWcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NjZW5lL2RhbmllbC9pbml0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);