const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Carro = new Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    }
});

const model = mongoose.model('Vehiculos', Carro);

module.exports = model;

