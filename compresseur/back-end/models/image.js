const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    imgCompress: { type: String, required: true },

})

const imageModel = mongoose.model('Image', imageSchema)

module.exports = imageModel