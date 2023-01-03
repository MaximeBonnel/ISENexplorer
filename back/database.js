module.exports = {
    getPassword: function(mongoose, id) {
        const connectionSchema = new mongoose.Schema({
            id:String,
            psw:String
        });
        
        const connectionModel = new mongoose.model("user", connectionSchema);
        
        connectionModel.find({id: id}, (err, users) => {
            if (err) return handleError(err);
            else console.log(users);
        });
    }
}