const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
   res.json(usuarios);
}

usuarioCtrl.createUsuario = async (req, res) => {
  const usuario = new Usuario({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    direccion: req.body.direccion,
    codigo_postal: req.body.codigo_postal,
    tipo_sanguineo: req.body.tipo_sanguineo
  });
  await usuario.save();
  res.json({
    'status': 'usuario guardado'
  });
};

usuarioCtrl.getUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
};

usuarioCtrl.editUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    direccion: req.body.direccion,
    codigo_postal: req.body.codigo_postal,
    tipo_sanguineo: req.body.tipo_sanguineo
  };

  await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
  res.json({status:'Usuario autorizado'});
}; 

usuarioCtrl.deleteUsuario = async (req, res) => {
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({status: 'Usuario eliminado'});
};

module.exports = usuarioCtrl;
