const mongoose = require('mongoose');
const careerSchema = new mongoose.Schema({
    name:String,
    requirement:String,
    email:String,
    pdf:String,
    message: String,
    createdAt: String
});

module.exports = mongoose.model('careers',careerSchema)