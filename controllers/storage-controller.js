const {storageModel} = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

//* Obtener el registro de la imagen
const getImage = async (req, res)=>{
    const data = await storageModel.find({});
    res.send({data});
};

//* Para crear el registro de la imagen
const createImage = async(req, res)=>{
    const {body, file} = req;
    console.log(body);
    console.log("FILE: " + file.fileName);
    //TODO: el id de mongo db del usuario al cual le vamos a asignar la imagen

    const fileData = {
        fileName: file.fileName,
        url: `${PUBLIC_URL}/${file.fileName}`
    };
    //* localhost:3000/13134343.png
    //* Llamamos al model
    const data = await storageModel.create(fileData);
    res.send(data);

};

module.exports = {getImage,createImage};