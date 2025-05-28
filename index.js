const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');

app.get('/api/v1/hola', (req, res) => {
  res.json({ mensaje: 'Hola Viejo  Fabio' });
});

app.get('/api/v1/usuario', (req, res) => {
  res.json({ id: 1, nombre: 'Juan', rol: 'admin' });
});

app.get('/api/v1/usuario/:cedula', (req, res) => {
  const cedula = req.params.cedula;
  const usuariosPath = path.join(__dirname, 'usuarios.json');
  const usuarios = JSON.parse(fs.readFileSync(usuariosPath, 'utf8'));
  const usuario = usuarios.find(u => u.cedula === cedula);
  if (!usuario) {
    return res.status(404).json({ mensaje: 'No existe este usuario' });
  }
  res.json(usuario);
});


app.get('/api/v2/usuario/:cedula', (req, res) => {
    const cedula = req.params.cedula;
    const usuariosPath = path.join(__dirname, 'usuariosv2.json');
    const usuarios = JSON.parse(fs.readFileSync(usuariosPath, 'utf8'));
    const usuario = usuarios.find(u => u.cedula === cedula);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'No existe este usuario' });
    }
    res.json(usuario);
  });
  









app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});