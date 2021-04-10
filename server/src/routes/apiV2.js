const { Router } = require("express");

const personService = require("../service/personService");

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
		console.log(dbresp);
		res.status(200).json(dbresp);
	} catch (error) {
		res.json(error);
	}

});

// für hobbys kein service erstellt (schlecht!)
const hobbyModell = require("../db/db").models.hobby;
router.post("/hobby", async (req, res) => {
	try {
		const dbres = await hobbyModell.create(req.body);
		res.json(dbres);
	} catch (error) {
		console.log(error);
		res.json(error);
	}
});

router.get("/hobby/:id", async (req, res) => {
	try {
		const dbres = await hobbyModell.findAll({
			where: {
				personId: req.params.id 
			}
		});

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

// unfertige programmatische version
// router.get("/person/:id", async (req, res) => {
// 	const dbresp = await personService.getAllPersonById(req.params.id);
// 	const dbres = await hobbyModell.findAll({
// 		where: {
// 			personId: dbresp.id
// 		}
// 	});
// 	res.status(200).json({
// 		dbresp
// 	});
// });

module.exports = router;