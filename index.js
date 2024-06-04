const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const addPlayer = require("./addplayer");



const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());


const connectionUrl = "mongodb+srv://agalyapytest:Test1234@cluster0.ngiwond.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(connectionUrl);


app.get("/", (req, res) => res.status(200).send("Hello World"));

// add-player
app.post("/player/addplayer", (req, res) => {
    const playerDetail = req.body
    addPlayer.create(playerDetail)
        .then((data) => { res.status(201).send({ data, msg: "added successfully" }); })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
});

//get player details
app.get("/player", (req, res) => {
    addPlayer.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
})

// delete player detail
app.delete("/deleteplayer/:id", (req, res) => {
    const id = (req.params.id);
    addPlayer.findByIdAndDelete({ _id: id })
        .then(() => res.json({msg:"player deleted successfully"}))
        .catch((err) => res.json(err))
})

//get one player
app.get("/player/getOneplayer/:id", (req, res) => {
    const id = req.params.id;
    addPlayer.findById(id)
        .then(data => { res.status(201).send(data) })
        .catch(err => {
            res.status(500).send(err.message);
            console.log(err);
        })
})

//update player
app.put("/player/updateplayer/:id", (req, res) => {
    const id = req.params.id;
    addPlayer.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => res.status(200).json( {msg:"player Updated successfully"}))
        .catch(err => {
            res.status(500).send(err.message);
            console.log(err);
        })
})


app.listen(port, () => console.log(`server is running on port ${port}`))