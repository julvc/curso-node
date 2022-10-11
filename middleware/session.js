const { userSystemModel } = require("../models");
const { handleHttpError } = require ("../utils/handle-error")
const { verifyToken } = require("../utils/handle-jwt")

const authMiddleware = async(req,res,next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NEED_SESSION", 401);
            return;
        }

        const token = req.headers.authorization.split(' ').pop();

        //* Una vez que obtenemos el token lo verificamos
        const dataToken = await verifyToken(token);

        //* Asegurarnos que el token tenga el _id
        if (!dataToken._id) {
            handleHttpError(res, `ERROR_ID_TOKEN`, 401);
            return;
        }
        //* Quien es el usuario que esta consumiendo el token?
        const user = await userSystemModel.findById(dataToken._id);
        req.user = user; //* inyectamos al usuario en la request
        next();
    } catch (error) {
        handleHttpError(res, `NOT_SESSION, ${error}`, 401)
    }
};

module.exports = authMiddleware;