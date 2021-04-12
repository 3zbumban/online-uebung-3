const { sequelize: {models} } = require("../db/models/index");

const saveHobbyToDb = (hobby) => {
	return models.hobby.create(hobby);
};

module.exports = {
	saveHobbyToDb
};