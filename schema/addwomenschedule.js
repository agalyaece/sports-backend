
const mongoose = require ("mongoose");


const addwomenSchema = mongoose.Schema({
    date: String,
    event_name:String,
    events: [{
        name: String,
        place: String,
        time: String
    }],
});
module.exports = mongoose.model("womenschedule", addwomenSchema);
