require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    const chemin = __dirname + '/index.html';
    res.sendFile(chemin);
});

app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`)
})