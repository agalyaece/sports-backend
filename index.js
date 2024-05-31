const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const addPlayer = require("./addPlayer")

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

    console.log("player details ====> ", playerDetail)
    addPlayer.create(playerDetail)
        .then((data) => { res.status(201).send(data); })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
});

app.listen(port, () => console.log(`server is running on port ${port}`))