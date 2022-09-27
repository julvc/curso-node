const multer = require("multer");

const storage = multer.diskStorage({
    //* destination en su funcion, los parametros: request, file(archivo) y cb(callback que nos va a indicar cuando se finaliza el proceso de logica a implementar)
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        //* __dirname "es donde estoy ubicado", llegamos a la carpeta (storage)
        //* hacemos uso del callback, pasa como primer argumento el error si existiese y como segundo argumento el pathStorage que hace relacion al destino del archivo
        cb(null, pathStorage);
    },
    filename: function(req,file,cb){
        //*micv.pdf, mifoto.png, mivideo.mp4
        //* file obtenemos el nombre original del archivo
        const ext = file.originalname.split(".").pop();
        //* ['micv','pdf'] la extensión siempre va a ser el ultimo elemento del array. El objetivo es crear un archivo con nombre aleatorio, de manera que nunca se sobreescriba
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename)
    },
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;