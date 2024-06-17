
const mongoose = require ("mongoose");


const addT20LeagueSchema = mongoose.Schema({
    date: String,
    event_name:String,
    events: [{
        name: String,
        place: String,
        time: String
    }],
});
module.exports = mongoose.model("t20schedule", addT20LeagueSchema);
