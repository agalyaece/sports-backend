
const mongoose = require ("mongoose");


const addPlayerSchema = mongoose.Schema({  
    name: String,
    runs: Number,
    wickets: Number,
}
);

module.exports = mongoose.model("addPlayer", addPlayerSchema);