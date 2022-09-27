const express = require("express");
const { createImage } = require("../controllers/storage-controller");

const router = express.Router(); //* Extraer de express lo que nos ayudara a trabajar con los r rutas
const{createUser,getUsers} = require("../controllers/users-controller");
const uploadMiddleware = require("../utils/handle-storage");

//*POST http://localhost:3000/api/storage
router.post("/", uploadMiddleware.single("myfile"), createImage);
module.exports = router;