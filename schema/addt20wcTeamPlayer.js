const mongoose = require ("mongoose");


const addT20PlayerSchema = mongoose.Schema({
    country: String,
    
    players: [{
        name: String,
        runs: Number,
        wickets: String
    }],
});
module.exports = mongoose.model("playerlist", addT20PlayerSchema);