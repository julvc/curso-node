const { check, validationResult } = require("express-validator");

const validatorCreateUser = [
    check("name").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("telefono").exists().notEmpty(),
    check("empresa").exists().notEmpty(),
    (req, res,next) => {
        //* handle
        validationResult(req, res,next);
    }
];

module.exports = {validatorCreateUser};