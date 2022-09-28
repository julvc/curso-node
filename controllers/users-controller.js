const { usersModel} = require('../models');
const { handleHttpError } = require('../utils/handle-error');
//* El controlador se encarga de la logica de nuestr aaplicacion (API)

//* Obntener la lista de usuarios de la base de datos
const getUsers = async (req, res) =>{
    const data = await usersModel.find({}); //* traigo todos los usuarios
    res.send({data});
};

//* Crear un usuario dentro de la base de datos
const createUser = async (req, res) =>{
try {
    //req "Request" es la solicitud
    //res "Response" la respuesta

    //const body = req.body;
    const { body } = req;
    console.log("El body: " + body);

    const data = await usersModel.create(body);
    //res.send({data: data});
    res.send({data})
} catch (error) {
    handleHttpError(res, "ERROR al crear Usuario. Mensaje del error: " + error);
    //res.status(403);
    //res.send({error});
    //* en mongoDb "code":11000 es clave duplicada
}
    
};

module.exports = {getUsers, createUser};