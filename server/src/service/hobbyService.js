const { sequelize: {models} } = require("../db/models/index");

const saveHobbyToDb = (person) => {
	return models.hobby.create(person);
};

module.exports = {
	saveHobbyToDb
};