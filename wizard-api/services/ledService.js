var LedController = require("../controllers/ledController");


index = async (req, res, next) => {
    // console.log(req);


    LedController.acendeVermelho();

    res.send("acendeu vermelho");

}

module.exports = {
    index
}
