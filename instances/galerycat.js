const mongoose = require('mongoose');
const galerycatSchema = new mongoose.Schema({
    name:String
});

module.exports = mongoose.model('galerycatagories',galerycatSchema)