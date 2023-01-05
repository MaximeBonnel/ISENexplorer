const MongoClient = require('mongodb').MongoClient;

module.exports = {
    getUsername: function(connectionModel, socket, id) {
        connectionModel.find({id: id}, (err, users) => {
            if (err) return handleError(err);
            socket.emit("resUsername", users[0].id);
        });
    },

    getPassword: function(connectionModel, socket, id) {
        connectionModel.find({id: id}, (err, users) => {
            if (err) return handleError(err);
            socket.emit("resPassword", users[0].psw);
        });
    },

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
    }
};