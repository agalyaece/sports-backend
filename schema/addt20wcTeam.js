
const mongoose = require ("mongoose");


const addT20TeamSchema = mongoose.Schema({
    team: String,
    image:String,
    
});
module.exports = mongoose.model("t20WCTeam", addT20TeamSchema);