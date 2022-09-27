const express = require("express");



const router = express.Router(); //* Extraer de express lo que nos ayudara a trabajar con los r rutas
const{createUser,getUsers} = require("../controllers/users-controller")

//*POST http://localhost:3000/api/storage
router.post("/", "middleware", "controlador");

module.exports = router;