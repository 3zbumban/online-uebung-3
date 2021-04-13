const { sequelize: {models} } = require("../db/models/index");

const saveUserToDb = (person) => {
	return models.person.create(person);
};

const getAllPersons = () => {
	return models.person.findAll({
		include: [{
			model: models.hobby,
			required: true,
			attributes: ["name", "id"]
		}],
		attributes: ["name", "alter", "id"]
	});
};

const getAllPersonById = (id) => {
	return models.person.findAll({
		where: {
			id: id			
		}
	});
};

const saveUserWithHobbysToDb = async (personWithHobbys) => {
	const userSavedinDb = await models.person.create({name: personWithHobbys.name, alter: personWithHobbys.alter});
	// ein einfaches for funktioniert nicht mit asynchronen funktionen, zum glück gibt es: for await (x of y) {...}
	for await (const hobby of personWithHobbys.hobbys) {
		const savedHobby = await models.hobby.create({name: hobby, personId: userSavedinDb.id});
		console.log(savedHobby);
	}
	return models.person.findAll({
		where: {
			id: userSavedinDb.id
		},
		include: [
			{
				model: models.hobby,
				attributes: ["name", "id"]
			}
		],
		attributes: ["name", "alter", "id"]
	});
};

const deleteHobbyFromPerson = (hobbyId) => {
	return models.hobby.destroy({
		where: {
			id: hobbyId
		}
	});
};

module.exports = {
	saveUserToDb,
	getAllPersons,
	getAllPersonById,
	saveUserWithHobbysToDb,
	deleteHobbyFromPerson
};