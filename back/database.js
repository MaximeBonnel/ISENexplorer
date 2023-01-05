const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

const uri = "mongodb+srv://admin:thisisasecurepass@isenexplorer.ww6hngj.mongodb.net/Images?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = {
    getUsername: function (connectionModel, socket, id) {
        connectionModel.find({ id: id }, (err, users) => {
            if (err) return handleError(err);
            socket.emit("resUsername", users[0].id);
        });
    },

    getPassword: function (connectionModel, socket, id) {
        connectionModel.find({ id: id }, (err, users) => {
            if (err) return handleError(err);
            if (users[0] != null) {
                socket.emit("resPassword", users[0].psw);
            } else {
                console.log('no matching id');
            }
        });
    },

    /* Upload dans la base de données
    uploadImage: function(data, img) {
        const uri = "mongodb+srv://admin:thisisasecurepass@isenexplorer.ww6hngj.mongodb.net/Images?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            const collection = client.db("Images").collection("image");
            if (err) throw err;

            const image = {
                name: img,
                data: Buffer.from(data)
            };

            collection.insertOne(image, (err, result) => {
                console.log('Image saved to database');
                client.close();
            });
        });
    },
    /**imageName: nom image lié aux infos
     * text, pitch, yaw, sceneId: infos du point
     */
    uploadImageInfos: function (imageName, text, pitch, yaw, hotspotId, sceneId) {
        const uri = "mongodb+srv://admin:thisisasecurepass@isenexplorer.ww6hngj.mongodb.net/Images?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect();
        const collection = client.db('Images').collection('infos');
        collection.insertOne({
            image: imageName,
            text: text,
            pitch: pitch,
            yaw: yaw,
            hotspotId: hotspotId,
            sceneId: sceneId
        });
        console.log('saved infos to db');
        client.close();
    },

    uploadImage: function(data, imgName) {
        // Enregistrer l'image sur le serveur
        const imageData = Buffer.from(data, 'base64');

        fs.writeFile('front/images/' + imgName, imageData, err => {
            if (err) console.error(err);
            else console.log('Image enregistrée');
        });

        // Enregister le nom de l'image dans la bdd
        client.connect(err => {
            const collection = client.db("Images").collection("image");
            if (err) throw err;

            const imageName = {
                name: imgName
            };

            collection.insertOne(imageName, (err, result) => {
                client.close();
            });
        });
    },

    getImagesNames: function() {
        client.connect(err => {
            const db = client.db("Images");
            const coll = db.collection("images");
            if (err) throw err;

            const cursor = coll.find({});

            console.log(cursor);
        });
    }
}