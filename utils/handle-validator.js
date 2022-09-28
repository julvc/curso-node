const { validationResult } = require("express-validator");

const validationResult = (req, res, next) => {
    try {
        validationResult(req).throw();//* Sino cumple la validación explota
        return next();//* vaya hacia el controlador paso las validaciones
    } catch (error) {
        res.status(403);
        res.send({errors: error.array()});
    }
}

module.exports = validationResult;