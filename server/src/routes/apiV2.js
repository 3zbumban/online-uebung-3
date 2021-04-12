const { Router } = require("express");

const personService = require("../service/personService");
const hobbyService = require("../service/hobbyService");

const router = Router();

router.get("/status", (req, res) => {
	res.json({
		message: "V2 OK"
	});
});

router.post("/person", async (req, res) => {
	const person = req.body;
	try {
		const dbresp = await personService.saveUserToDb(person);
		res.status(200).json(dbresp);
	} catch (error) {
		res.json(error);
	}

});

router.post("/hobby", async (req, res) => {
	try {
		const dbres = await hobbyService.saveHobbyToDb(req.body);
		res.json(dbres);
	} catch (error) {
		console.log(error);
		res.json(error);
	}
});

router.get("/persons", async (req, res) => {
	const dbresp = await personService.getAllPersons();

	res.status(200).json({
		dbresp
	});
});

module.exports = router;