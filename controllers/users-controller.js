const { matchedData, body } = require("express-validator");
const { usersModel} = require('../models');
const { handleHttpError } = require('../utils/handle-error');
//* El controlador se encarga de la logica de nuestr aaplicacion (API)

//* Obntener la lista de usuarios de la base de datos
const getUsers = async (req, res) =>{
    try {
        const data = await usersModel.find({}); //* traigo todos los usuarios
        res.send({data});
    } catch (error) {
        handleHttpError(res, "Error al obtener usuarios: " + `${error}`);
    }
};

const getUserById = async(req, res) => {
    try {
        req = matchedData(req);
        const {id}= req;
        const data = await usersModel.findById(id).exec();
        res.send({data});
        //const id = req.id;
    } catch (error) {
        handleHttpError(res, `ERROR_GET_USER_BY_ID, ${error}`);
    }
};


//* Crear un usuario dentro de la base de datos
const createUser = async (req, res) =>{
try {
    //req "Request" es la solicitud
    //res "Response" la respuesta

    //const body = req.body;
    const body = matchedData(req);
    console.log({body});

    const data = await usersModel.create(body);
    //res.send({data: data});
    res.send({data});
} catch (error) {
    handleHttpError(res, "ERROR al crear Usuario. Mensaje del error: " + error);
    //res.status(403);
    //res.send({error});
    //* en mongoDb "code":11000 es clave duplicada
}
    
};

const updateUser = async (req,res) => {
    try {
        const {id, ...body } = matchedData(req);
        const data = await usersModel.findByIdAndUpdate({_id: id}, body,{new: true});
        res.send({data});
    } catch (error) {
    handleHttpError(res, "ERROR al actualizar Usuario. Mensaje del error: " + error)
    }
}


const deleteUser = async (req,res) => {
    try {
        req = matchedData(req);
        const {id}= req;
        const info = await usersModel.deleteOne({_id: id});
        res.send({info});
    } catch (error) {
    handleHttpError(res, "ERROR al eliminar Usuario. Mensaje del error: " + error)
    }
}

module.exports = {getUsers, createUser, getUserById,deleteUser,updateUser};