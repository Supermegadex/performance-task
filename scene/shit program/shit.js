export default class Shit {
    constructor(lib) {
        this.lib = lib;
        this.x = 10;
        this.y = 225;
        this.z = 240;
        this.w = 225;
        this.a = 0;
        this.b = 0;
        this.stars = [];
        for (let i=0; i<100; i++){
            let newStar = {
                x: this.lib.randomNumber(0, 320),
                y: this.lib.randomNumber(0,450),
                s: this.lib.randomNumber(1, 2),
                r: this.lib.randomNumber(240,255),
                g: this.lib.randomNumber(240,255),
                b: this.lib.randomNumber(100,255)
            };
            this.stars.push(newStar);
        }
    }
    
    draw() {
        this.lib.penUp();
        this.lib.moveTo(0,450);
        this.lib.turnTo(315);
        this.lib.penWidth(4);
        var r = 1;
        var g = 30;
        var b = 86;
        for (var i = 0; i < 16; i++){
          this.Colors(r, g, b);
          r = r + 6;
          g = g - 2;
          b = b - 2;
        }
        this.lib.penWidth(1);
        for (var i = 0; i < 100; i++){
          this.drawStar(i);
        }
        this.lib.moveTo(50, 225);
        this.lib.turnTo(0);
        for (i = 0; i < 50; i++){
          this.drawStroid();
        }
        this.lib.penUp();
        this.lib.penRGB(105, 105, 105);
        this.lib.moveTo(20, 225);
        this.lib.turnTo(0);
        this.lib.penWidth(23);
        this.lib.penDown();
        this.lib.arcRight(360, 140);
        this.lib.penUp();
        this.lib.moveTo(235, 225);
        this.lib.penWidth(14);
        this.lib.penDown();
        this.lib.arcLeft(360, 75);
        this.lib.penUp();
        
        this.animate();
    }
    
    animate() {
        this.moon();
        this.planet();
        this.planet();
        requestAnimationFrame(() => this.draw());
    }
    
    //fills parts of the background
    Colors(red, green, blue){
      for (var i=0; i < 9; i++){
        this.lib.penDown();
        this.lib.penRGB(red, green, blue);
        this.lib.moveForward(4000);
        this.lib.turnRight();
        this.lib.moveForward(2);
        this.lib.turnRight();
        this.lib.moveForward(4004);
        this.lib.turnLeft();
        this.lib.moveForward(2);
        this.lib.turnLeft();
      }
    }
    
    //draws a star
    drawStar(i){
      this.lib.penUp();
      this.lib.penRGB(this.stars[i].r, this.stars[i].g, this.stars[i].b);
      this.lib.moveTo(this.stars[i].x, this.stars[i].y);
      this.lib.dot(this.stars[i].s);
    }
    
    drawStroid(){
      this.lib.penUp();
      this.lib.arcRight(this.lib.randomNumber(20, 30), 110);
      var x = this.lib.getX();
      var y = this.lib.getY();
      var d = this.lib.getDirection();
      this.lib.penDown();
      this.lib.penRGB(90, 45, 12);
      this.lib.dot(this.lib.randomNumber(2, 3));
      this.lib.turnRight(this.lib.randomNumber(0, 360));
      this.lib.moveForward(this.lib.randomNumber(2, 5));
      this.lib.dot(this.lib.randomNumber(2, 3));
      this.lib.penUp();
      this.lib.moveTo(x, y);
      this.lib.turnTo(d);
    }
    
    moon() {
      this.lib.moveTo(this.x, this.y);
      this.lib.turnTo(this.a);
      this.lib.penWidth(1);
      this.lib.penDown();
      this.lib.penRGB(158, 34, 0);
      this.lib.arcRight(180, 10);
      this.lib.penUp();
      this.lib.turnLeft(90);
      this.lib.moveForward(0.1);
      this.lib.turnRight(90);
      this.lib.penDown();
      this.lib.penWidth(1.1);
      this.lib.penRGB(105, 105, 105);
      this.lib.arcRight(180, 10.1);
      this.lib.penUp();
      this.lib.turnRight(90);
      this.lib.moveForward(0.1);
      this.lib.turnLeft(90);
      this.lib.arcRight(0.01, 150);
      this.x = this.lib.getX();
      this.y = this.lib.getY();
      this.a = this.lib.getDirection();
    }
    
    planet() {
        this.lib.moveTo(this.z, this.w);
        this.lib.turnTo(this.b);
        this.lib.penDown();
        this.lib.penRGB(0, 131, 164);
        this.lib.arcLeft(180, 5);
        this.lib.penRGB(105, 105, 105);
        this.lib.penUp();
        this.lib.turnRight(90);
        this.lib.moveForward(0.1);
        this.lib.turnLeft(90);
        this.lib.penDown();
        this.lib.penWidth(1.1);
        this.lib.arcLeft(180, 5.1);
        this.lib.penUp();
        this.lib.turnLeft(90);
        this.lib.moveForward(0.1);
        this.lib.turnRight(90);
        this.lib.arcLeft(0.01, 80);
        this.z = this.lib.getX();
        this.w = this.lib.getY();
        this.b = this.lib.getDirection();
    }
}