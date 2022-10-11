const { handleHttpError } = require("../utils/handle-error");

const checkRole = (roles) => (req,res,next) => {
    try {
        const { user } = req; //*traemos al usuario que esta intentado hacer la peticion
        //* extraer los roles
        const rolesByUser = user.role;

        //* verificar si cumple con los roles para esta ruta
        const checkValueRole = roles.some((rolSingle) => rolesByUser.includes(rolSingle));
    if (!checkValueRole) {
        handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
        return;
    }
    next();
    } catch (error) {
        handleHttpError(res, "ERROR_PERMISSIONS" + error, 403);
    }
};

module.exports = checkRole;