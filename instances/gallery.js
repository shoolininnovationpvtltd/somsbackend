const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema({
    description:String,
    pdf:String,
});

module.exports = mongoose.model('gallerys',gallerySchema)