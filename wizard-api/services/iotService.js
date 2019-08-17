var LedController = require("../controllers/ledController");


index = async (req, res, next) => {


    console.log(req.query);

    if(req.query.tipoObjeto == 1){
        LedController.acendeAzul();
    }

    
    if(req.query.tipoObjeto == 2){
        LedController.acendeLaranja();
    }

    if(req.query.tipoObjeto == 3){
        LedController.acendeVerde();
    }

    res.send("acendeu Azul");

}

module.exports = {
    index
}
