const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuarioSchema = new Schema ({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    direccion: { type: String, required: true },
    codigo_postal: { type: Number, required: true },
    tipo_sanguineo: { type: String, required: true },
});

module.exports = mongoose.model('Usuario',  UsuarioSchema);