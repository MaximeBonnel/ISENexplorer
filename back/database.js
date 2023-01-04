module.exports = {
    getPassword: function(mongoose, id) {
        const connectionSchema = new mongoose.Schema({
            id:String,
            psw:String
        });
        
        const connectionModel = new mongoose.model("user", connectionSchema);

        var resp;
        connectionModel.find({id: id}, (err, users, resp) => {
            if (err) return handleError(err);
            else {
                resp = users[0].psw;
            }
        });

        return users;
    }
};