const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/hola', (req, res) => {
  res.json({ mensaje: 'Hola Viejo  Fabio' });
});

app.get('/api/usuario', (req, res) => {
  res.json({ id: 1, nombre: 'Juan', rol: 'admin' });
});

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});