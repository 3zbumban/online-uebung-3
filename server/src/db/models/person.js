"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class person extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// const { person, hobby } = models;
			// person.hasMany(hobby);
			// hobby.belongsTo(person);
		}
	}
	person.init({
		name: DataTypes.STRING,
		alter: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: "person",
	});
	return person;
};