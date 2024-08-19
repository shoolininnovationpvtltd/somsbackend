const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    access:String,
    apassword:String
});

module.exports = mongoose.model('admins',adminSchema)