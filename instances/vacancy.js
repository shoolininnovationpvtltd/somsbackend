const mongoose = require('mongoose');
const vacancySchema = new mongoose.Schema({
    name:String,
    createdAt: String
});

module.exports = mongoose.model('vacancys',vacancySchema)