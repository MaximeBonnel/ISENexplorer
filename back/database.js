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
    }
};