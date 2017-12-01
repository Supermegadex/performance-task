/*************************************************************
 * 
 * Space drawing code for JUPITER Performance Task Practice.
 * Author: Keegan Brown.
 * (c) 2017 licensed under GPL v3.
 * 
 *************************************************************/

export default class Space {
    stars(lib) {
        for (let i=0; i<100; i++){
            //move to a random point and draws stars 100 times
            lib.penColor("white");
            lib.moveTo(Math.random()*lib.width,Math.random()*lib.height);
            lib.dot(Math.random()*3);
        }
    }
    background(lib){
        //draws background
        lib.moveTo(lib.width/2,lib.height/2);
        lib.penColor("black");
        lib.dot(500);
    }
    moons (lib){
        //This function uses a for loop and if loop to create 8 moons
        for (var i=0;i<7;i++){
            var size = Math.random()*12;
            lib.moveTo(Math.random()*(lib.width),Math.random()*(lib.height));
            //the following makes sure that the moon does not end up in front of Jupiter.
                if (lib.getX() < lib.width / 2 - 131){
                lib.penRGB(62+lib.randomNumber(0,50),39+lib.randomNumber(0,30),35+lib.randomNumber(0,20));
                lib.dot(size);
                }
                if ( lib.getX() > lib.width / 2 + 131){
                   lib.penRGB(62+lib.randomNumber(0,50),39+lib.randomNumber(0,30),35+lib.randomNumber(0,20));
                    lib.dot(size);
                }
                if (lib.getY()>lib.height/2+130 || lib.getY()<lib.height-130){
                    lib.penRGB(62+lib.randomNumber(0,50),39+lib.randomNumber(0,30),35+lib.randomNumber(0,20));
                    lib.dot(size);
                }
            }
       }    
    }
