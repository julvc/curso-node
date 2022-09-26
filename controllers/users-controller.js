const { usersModel} = require('../models');
//* El controlador se encarga de la logica de nuestr aaplicacion (API)

//* Obntener la lista de usuarios de la base de datos
const getUsers = async (req, res) =>{
    const data = await usersModel.find({}); //* traigo todos los usuarios
    res.send({data});
};

//* Crear un usuario dentro de la base de datos
const createUser = async (req, res) =>{
    //req "Request" es la solicitud
    //res "Response" la respuesta

    //const body = req.body;
    const { body } = req;
    console.log("El body: " + body);

    const data = await usersModel.create(body);
    //res.send({data: data});
    res.send({data})
};

module.exports = {getUsers, createUser};