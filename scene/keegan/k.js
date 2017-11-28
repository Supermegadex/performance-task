export default class Space {
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