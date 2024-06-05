const express = require("express");
const app = express();

const jugador = require('./jugador');

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send("Bienvenido a mi aplicación");
});

app.get('/messages/:mensaje', (req, res) => {
    const mensaje = req.params.mensaje;
    res.status(200).send(`Su mensaje es ${mensaje}`);
});

app.get('/error', (req, res) => {
    res.status(400).send("Mensaje de error");
});

app.get('/include/texto/:cadena', (req, res) => {
    const cadena = req.params.cadena;
    if (cadena.includes("texto")) {
        res.status(200).send(`La cadena ${cadena} incluye texto`);
    } else {
        res.status(200).send(`La cadena ${cadena} no incluye texto`);
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

