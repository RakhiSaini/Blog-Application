const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    
})

const userModel = model("user", userSchema)


module.exports = userModel;