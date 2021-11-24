const mongoose = require('mongoose');

// Model de l'image  

const imageSchema = mongoose.Schema({
    imgCompress: { type: String, required: true },

})

const imageModel = mongoose.model('Image', imageSchema)

module.exports = imageModel