const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true, //* que el correo sea unico
        },
        telefono: {
            type: Number
        },
        empresa: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//* "users" es el nombre de la coleccion, lo que se conoce en SQL como una tabla
module.exports = mongoose.model("users", UserScheme);