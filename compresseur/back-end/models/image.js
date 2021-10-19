const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    url: { type: String, required: true },
})

const imageModel = mongoose.model('Image', imageSchema)

module.exports = imageModel