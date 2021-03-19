const express = require ("express");
const app = express ();

const path = require ("path");

const port = 3030;

const publicPath = path.join (__dirname, "public")
app.use (express.static (publicPath));

app.get ("/", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/home.html"))
})

app.listen (port, (req, res) => {
    console.log ("Servidor corriendo en el puerto " + port);
});