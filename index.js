const app = require('express')();
const http = require('http').createServer(app);
const mongoose = require('mongoose');
const bdd = require('./back/database');

// BDD
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/ISENexplorer", err => {
    if(!err) console.log('db connected');
    else console.log('db error');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});

http.listen(4200, () => {
    console.log('Serveur lancé sur le port 4200');
});

// BDD
bdd.getPassword(mongoose, 'Maxime');