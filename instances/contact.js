const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name:String,
    usertype:String,
    email:String,
    message:String,
    createdAt: String
});

module.exports = mongoose.model('contacts',contactSchema)