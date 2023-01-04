const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

// BDD
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/ISENexplorer", err => {
    if(!err) console.log('db connected');
    else console.log('db error');
})

http.listen(4200, () => {
    console.log('Serveur lancé sur le port 4200');
});

// redirige vers la page d'accueil
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});

// BDD
var psw = require('./back/database').getPassword
console.log(psw(mongoose, 'Maxime'));