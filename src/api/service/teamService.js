const Team = require("../../model/Team")

exports.createData = async (req, res) => {
    const data = {
        name: req.body.name,
        wins: req.body.wins,
        draws: req.body.draws,
        loses: req.body.loses,
        foundation: req.body.foundation,
        logo: req.body.logo,
    }

    const newTeam = new Team(data)

    await newTeam.save().then(() => {
        console.log("created team")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err)
    });
}

exports.readData = async (req, res) => {
    Team.find({}, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        res.status(200).send(result)
    })
}

exports.updateData = async (req, res) => {
    const data = {
        id: req.params.id,
        name: req.body.name,
        wins: req.body.wins,
        draws: req.body.draws,
        loses: req.body.loses,
        foundation: req.body.foundation,
        logo: req.body.logo,
        date: Date.now()
    }

    const prevData = {
        name: req.body.prevName,
        wins: req.body.prevWins,
        draws: req.body.prevDraws,
        loses: req.body.prevLoses,
        foundation: req.body.prevFoundation,
        logo: req.body.prevLogo,
        date: req.body.prevDate
    }

    //https://mongoosejs.com/docs/tutorials/findoneandupdate.html
    try {
        await Team.findOneAndUpdate(
            data.id, 
            data,
            {new: true}
        )
    } catch (error) {
        console.log(error)
        res.status(500)
    }

    console.log("updated")
    res.status(200).send(data)
}

exports.deleteData = async (req, res) =>{
    const data = {
        id: req.params.id
    }

    await Team.findByIdAndRemove(data.id).exec()

    res.send(data)
}

exports.findByName = async (req, res) => {
    const data = {
        name: req.params.name
    }
    
    Team.find({name: data.name}, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        res.status(200).send(result)
    })
}
