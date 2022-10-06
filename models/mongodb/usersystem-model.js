const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

//* Declarar el schema
const userSystemScheme = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true //*correo debe ser unico
    },
    password: {
        type: String,
        select: false //*para que no retorne la password
    },
    role: {
        type: ["user","admin"], //*para generar mas roles se puede agregar mas perfiles, no es necesario otro modelo
        default: "user"
    }
},
{
    timestamps: true, //* createdAt, updateAt
    versionKey: false,
}
);

userSystemScheme.plugin(mongooseDelete,{overrideMethods: 'all'});
module.exports = mongoose.model("usersystem", userSystemScheme);