export default class Library {
    constructor(ctx, width, height) {
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
    
    moveTo(x, y) {
        this.turtle.x = x;
        this.turtle.y = y;
    }
    
    penColor(color) {
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
        this.turtle.color = color;
    }
    
    dot(radius) {
        this.ctx.beginPath();
        this.ctx.arc(this.turtle.x, this.turtle.y, radius, 0, Math.PI * 2, true);
        this.ctx.fill();
    }
    
    turnRight(deg) {
        this.turtle.rot += deg || 90;
    }
    
    turnLeft(deg) {
        this.turtle.rot -= deg || 90;
    }
    
    turnTo(deg) {
        this.turtle.rot = deg || 0;
    }
    
    getX() {
        return this.turtle.x;
    }
    
    getY() {
        return this.turtle.y;
    }
    
    penUp() {
        this.turtle.pen = false;
    }
    
    penDown() {
        this.turtle.pen = true;
    }
    
    penRGB(r, g, b, a) {
        if (a) {
            this.penColor(`rgba(${r}, ${g}, ${b}, ${a})`);
        }
        else {
            this.penColor(`rgb(${r}, ${g}, ${b})`);
        }
    }
    
    penWidth(width) {
        this.ctx.lineWidth = width;
        this.turtle.width = width;
    }
    
    getDirection() {
        let dir = this.turtle.rot;
        while (dir < 0) dir += 360;
        while (dir >= 360) dir -= 360;
        return dir;
    }
    
    moveForward(dist) {
        let x1 = this.turtle.x;
        let y1 = this.turtle.y;
        let angle = this.getDirection().toRad();
        let L = dist || 25;
        let x2 = x1 + Math.sin(angle) * L;
        let y2 = y1 - Math.cos(angle) * L;
        if (this.turtle.pen) {
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        }
        this.turtle.x = x2;
        this.turtle.y = y2;
    }
    
    moveBackward(dist) {
        let x1 = this.turtle.x;
        let y1 = this.turtle.y;
        let angle = this.getDirection().toRad();
        let L = dist || 25;
        let x2 = x1 - Math.sin(angle) * L;
        let y2 = y1 + Math.cos(angle) * L;
        if (this.turtle.pen) {
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        }
        this.turtle.x = x2;
        this.turtle.y = y2;
    }
    
    move(x, y) {
        let x1 = this.turtle.x;
        let y1 = this.turtle.y;
        let x2 = x1 + x;
        let y2 = y1 + y;
        if (this.turtle.pen) {
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        }
        this.turtle.x = x2;
        this.turtle.y = y2;
    }
    
    arcRight(angle, radius, counterclockwise) {
        var centerAngle = counterclockwise ? -90 : 90;
        var clockwiseDegrees = counterclockwise ? -angle : angle;
        var ctx = this.ctx;
        if (ctx) {
        var centerX = this.turtle.x +
              radius * Math.sin(2 * Math.PI * (this.turtle.rot + centerAngle) / 360);
            var centerY = this.turtle.y -
              radius * Math.cos(2 * Math.PI * (this.turtle.rot + centerAngle) / 360);
        
            var startAngle =
              2 * Math.PI * (this.turtle.rot + (counterclockwise ? 0 : 180)) / 360;
            var endAngle = startAngle + (2 * Math.PI * clockwiseDegrees / 360);
        
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
    
    arcLeft(angle, radius) {
        this.arcRight(angle, radius, true);
    }
}