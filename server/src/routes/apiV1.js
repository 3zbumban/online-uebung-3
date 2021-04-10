const { Router } = require("express");

const router = Router();

const personen = [];

router.post("/person", (req, res) => {
    const person = req.body
    // console.log(req.body);
    personen.push(person);

    res.status(200).json({
        // personen: personen (kurz:
        personen
    })
});

router.get("/persons", (req, res) => {
    res.status(200).json({
        // personen: personen (kurz:
        personen
    })
});

const person = {
    name: "",
    alter: "",
    hobbys: []
}

module.exports = router;