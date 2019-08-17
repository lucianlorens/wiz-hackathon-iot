var Blink1 = require('node-blink1');

acendeVermelho = ()=>{
    var devices = Blink1.devices();
    var blink1 = new Blink1(devices[0]);
    var blink2 = new Blink1(devices[1]);

    for (let index = 0; index < 5000; index++) {
        setTimeout(()=>{
            blink1.setRGB(255, 0, 0);
            blink1.setRGB(0, 0, 0);
            blink2.setRGB(0, 0, 255);
            blink2.setRGB(0, 0, 0);
        }, 4000)
    }
}

acendeAzul = ()=>{
    var devices = Blink1.devices();
    var blink1 = new Blink1(devices[0]);

    for (let index = 0; index < 5000; index++) {
        setTimeout(()=>{
            blink1.setRGB(0, 0, 255);
            blink1.setRGB(0, 0, 0);
        }, 4000)
    }
}

acendeVerde = ()=>{
    var devices = Blink1.devices();
    var blink1 = new Blink1(devices[0]);

    for (let index = 0; index < 5000; index++) {
        setTimeout(()=>{
            blink1.setRGB(0, 255, 0);
            blink1.setRGB(0, 0, 0);
        }, 4000)
    }
}

acendeLaranja = ()=>{
    var devices = Blink1.devices();
    var blink1 = new Blink1(devices[0]);

    for (let index = 0; index < 5000; index++) {
        setTimeout(()=>{
            blink1.setRGB(255, 166, 0);
            blink1.setRGB(0, 0, 0);
        }, 4000)
    }
}


module.exports = {
    acendeVermelho
}