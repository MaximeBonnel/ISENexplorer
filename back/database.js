const MongoClient = require('mongodb').MongoClient;
const { prototype } = require('events');
const fs = require('fs');

const uri = "mongodb+srv://admin:thisisasecurepass@isenexplorer.ww6hngj.mongodb.net/Images?retryWrites=true&w=majority";

async function getNames(cursor) {
    const imageNames = [];

    (await cursor.toArray()).forEach(function (info) {
        imageNames.push(info.name);
    });

    return imageNames;
}

async function getInfos(cursor) {
    const infos = [];

    (await cursor.toArray()).forEach(function (info) {
        infos.push(info);
    });

    return infos;
}

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
                socket.emit("resPassword", "null");
            }
        });
    },

    /**imageName: nom image lié aux infos
     * text, pitch, yaw, sceneId: infos du point
     */
    uploadImageInfos: function (imageName, text, pitch, yaw, hotspotId, sceneId) {
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect((err) => {
            if (err) throw err;
            const collection = client.db('Images').collection('infos');
            let data = {
                image: imageName,
                text: text,
                pitch: pitch,
                yaw: yaw,
                hotspotId: hotspotId,
                sceneId: sceneId
            };

            collection.insertOne(data);
            console.log('Saved infos to db');
        });
    },

    getImageInfos: function (imageName) {
        return new Promise((resolve, reject) => {
            const client = new MongoClient(uri, { useNewUrlParser: true });
            client.connect(async (err) => {
                const db = client.db("Images");
                const coll = db.collection("infos");
                if (err) {
                    reject(err);
                }
                const cursor = coll.find({ "image": imageName });

                try {
                    let infos = await getInfos(cursor);
                    resolve(infos);
                } catch (err) {
                    reject(err);
                }
            });
        });
    },

    // Upload une image
    uploadImage: function (data, imgName) {
        // Enregistrer l'image sur le serveur
        const imageData = Buffer.from(data, 'base64');

        fs.writeFile('front/images/' + imgName, imageData, err => {
            if (err) console.error(err);
        });


        // Enregister le nom de l'image dans la bdd
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            if (err) throw err;
            const collection = client.db("Images").collection("image");

            const imageName = {
                name: imgName
            };

            collection.insertOne(imageName, (err) => {
                if (err) throw err;
            });
        });

        console.log('Image enregistrée');
    },

    // Supprimer une image
    removeImage: function (imgName) {
        fs.unlink('front/images/' + imgName, (err) => {
            if (err) throw err;
            else console.log("L'image a été supprimée");
        });

        // Supprimer le nom de l'image dans la bdd
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            const collection = client.db("Images").collection("image");
            if (err) throw err;

            collection.deleteOne({ name: imgName }, (err) => {
                if (err) throw err;
            })
        });
    },

    getImagesNames: function () {
        return new Promise((resolve, reject) => {
            const client = new MongoClient(uri, { useNewUrlParser: true });
            client.connect(async (err) => {
                const db = client.db("Images");
                const coll = db.collection("image");
                if (err) {
                    reject(err);
                }

                const cursor = coll.find();

                try {
                    const infos = await getNames(cursor);
                    resolve(infos);
                } catch (err) {
                    reject(err);
                }
            });
        });
    }
}