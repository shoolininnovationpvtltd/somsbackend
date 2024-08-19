const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    cname:String,
    ctype:String,
    ustate:String,
    createdAt: String
});

module.exports = mongoose.model('courses',courseSchema)