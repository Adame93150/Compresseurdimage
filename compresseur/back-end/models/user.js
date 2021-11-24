const mongoose = require('mongoose');

//model de l'user 
const userSchema = mongoose.Schema({
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    email: { type: String, required: true, unique: true },
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel