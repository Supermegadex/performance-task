export default class Space {
    stars(lib) {
        for (let i=0; i<100; i++){
            //move to a random point and draws stars 100 times
            lib.penColor("white");
            lib.moveTo(Math.random()*lib.width,Math.random()*lib.height);
            lib.dot(Math.random()*2);
        }
    }
    background(lib){
        //draws background
        lib.moveTo(lib.width/2,lib.height/2);
        lib.penColor("black");
        lib.dot(500);
    }
}