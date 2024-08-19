const mongoose = require('mongoose');
const teamSchema = new mongoose.Schema({
    name:String,
    pdf:String,
    deg:String,
    description:String,
    flink:String,
    ilink:String,
    llink:String,
});

module.exports = mongoose.model('teams',teamSchema)