const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});

http.listen(4200, () => {
    console.log('Serveur lancé sur le port 4200');
});