const { sequelize: {models} } = require("../db/models/index");

const saveUserToDb = (person) => {
	return models.person.create(person);
};

const getAllPersons = () => {
	return models.person.findAll({
		include: [{
			model: models.hobby,
			required: true,
			attributes: ["name"]
		}],
		attributes: ["name", "alter"]
	});
};

const getAllPersonById = (id) => {
	return models.person.findAll({
		where: {
			id: id			
		}
	});
};

module.exports = {
	saveUserToDb,
	getAllPersons,
	getAllPersonById
};