const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
    {
    url: {
        type: String
    },
    filename: {
        type: String
    },
    mediaId: {
        type: mongoose.Types.ObjectId, //* Debe ser del tipo de una ID de MongoDB
    }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("storages", StorageScheme);