const { sequelize: { models } } = require("../db/models/index");

const saveHobbyToDb = (hobby) => {
	return models.hobby.create(hobby);
};

const getHobbyWithUserId = (id) => {
	return models.hobby.findAll({
		where: {
			personId: id 
		}
	});
};

module.exports = {
	saveHobbyToDb,
	getHobbyWithUserId
};