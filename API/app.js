require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const chemin = __dirname + '/index.html';
    res.sendFile(chemin);
});

app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`)
})