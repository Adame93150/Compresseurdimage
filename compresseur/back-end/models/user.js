const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true},
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel