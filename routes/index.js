const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; //* Nos devuelve el path en donde esta ubicado este archivo "index.js" (RUTA ABSOLUTA)
//console.log(PATH_ROUTES);
//const a = fs.readdirSync(PATH_ROUTES); //* retorna un array
//['index.js','users.js','storage.js']
const removeExtension = (fileName) =>{
    return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter( (file)=> {
    console.log(file); // index.js y users.js
    const name = removeExtension(file);
    if (name != 'index') {
        router.use(`/${name}`, require(`./${file}`));
    }
})


module.exports = router;