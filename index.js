const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const addPlayer = require("./schema/addplayer");
const teams = require("./schema/addteam")
const internationalSchedule = require("./schema/addinternationalschedule")
const internationalTeam = require("./schema/addinterteam");
const leagueTeam = require("./schema/addleagueteam");
const domesticTeam = require("./schema/addDomesticteam");
const t20schedule = require ("./schema/addt20leagueschedule")
const womenschedule = require("./schema/addwomenschedule")

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
        .then(() => res.json({ msg: "player deleted successfully" }))
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
        .then(() => res.status(200).json({ msg: "player Updated successfully" }))
        .catch(err => {
            res.status(500).send(err.message);
            console.log(err);
        })
})


//get womenteam Details
app.get("/teams", (req, res) => {
    teams.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
})

//get international team Details
app.get("/teams/international", (req, res) => {
    internationalTeam.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
})

//get domestic team Details
app.get("/teams/domestic", (req, res) => {
    domesticTeam.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
})


//get league team Details
app.get("/teams/league", (req, res) => {
    leagueTeam.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
})

//add international schedule 
app.get("/schedule/international", (req, res) => {
    internationalSchedule.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
})

//add t20 schedule 
app.get("/schedule/t20", (req, res) => {
    t20schedule.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
})


//add women schedule 
app.get("/schedule/women", (req, res) => {
    womenschedule.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
})

app.listen(port, () => console.log(`server is running on port ${port}`))