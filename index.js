const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const bdd = require('./back/database');

// BDD
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://admin:thisisasecurepass@isenexplorer.ww6hngj.mongodb.net/Users?retryWrites=true&w=majority", err => {
    if (!err) console.log('bdd connecté');
    else console.log('erreur bdd');
});

// Collections bdd
const connectionSchema = new mongoose.Schema({
    id: String,
    psw: String
});
// 'infos' is the name of the collection in db Users
const connectionModel = new mongoose.model("info", connectionSchema);
/*
existing admin account:
id:enzo
psw:123password
*/

http.listen(4200, () => {
    console.log('Serveur lancé sur le port 4200');
});

// initialisation du chemin d'acces
app.use(express.static(__dirname + '/front/'));

// redirections
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/exterieur", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/hall", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/accueil", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/couloir1", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/couloir2", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/bde", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/jnd", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/8eme", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/meeting", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/biblio", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/piano", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/adicode", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/fab", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/connection", (req, res) => {
    res.sendFile(__dirname + '/front/html/signIn.html');
});
app.get("/admin", (req, res) => {
    res.sendFile(__dirname + '/front/html/admin.html');
});

// Sockets
io.on('connection', (socket) => {
    console.log('utilisateur connecté');
});

// Après la connection au port
io.on('connection', (socket) => {

    // Nom d'utilisateur
    socket.on("username", (info) => {
        bdd.getUsername(connectionModel, socket, info[0]);
    });

    // Mot de passe
    socket.on("password", (info) => {
        bdd.getPassword(connectionModel, socket, info[0]);
    });

    // Upload image
    socket.on("upload", (file) => {
        bdd.uploadImage(file[0], file[1]);
    });
});