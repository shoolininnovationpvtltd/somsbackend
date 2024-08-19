const mongoose = require('mongoose');
const aboutSchema = new mongoose.Schema({
    description:String,
    pdf:String,
});

module.exports = mongoose.model('abouts',aboutSchema)