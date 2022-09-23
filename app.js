require("dotenv").config(); //* para decirle a la aplicacion que utilice variables de entorno 
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors()); //* nos permite evitar el error de origen cruzado, de momento todos los clientes se pueden conectar

const port = process.env.PORT || 3001; //* en caso de que llegue a fallar hay un puesto alternativo para conectarse 

//* pasamos como primer argumento el puerto y luego una funcion
app.listen(port, ()=> {
    //* alt+96 para las comillas francesas
    console.log(`Servidor en linea : http://localhost:${port}`);
});

dbConnect();