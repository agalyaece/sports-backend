const mongoose = require ("mongoose");


const addTeamsSchema = mongoose.Schema({
    title: String,
    titleLink:String,
    link: String,
});

module.exports = mongoose.model("international", addTeamsSchema)