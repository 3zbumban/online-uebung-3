const { Router } = require("express");
const personService = require("../service/personService");

const router = Router();

router.post("/person", async (req, res) => {
	const { body } = req;
	const savedPerson = await personService.saveUserWithHobbysToDb(body);
	res.json(savedPerson);
});

router.delete("/hobby/:id", async (req, res) => {
	const { id } = req.params;
	const dbresp = await personService.deleteHobbyFromPerson(id);
	res.json(dbresp);
});

module.exports = router;