const Team = require("../../model/Team")

exports.createData = async (req, res) => {
    const data = {
        name: "Teste",
        foundation: 1999,
        logo: "zzz"
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