const express = require('express');
const { registerUserSystemController, loginUserSystemController  } = require('../controllers/auth-controller');
const { validatorRegisterUser, validatorLoginUser } = require('../validators/auth-validators');
//* controladores loginController, registerController
//* Modelo
//* Validatos para login y register

const router = express.Router();

//* http://localhost:3000/api/auth
//* http://localhost:3000/api/auth/login
//* http://localhost:3000/api/auth/register

router.post("/register",validatorRegisterUser,registerUserSystemController);
router.post("/register",validatorLoginUser,loginUserSystemController );

module.exports = router;