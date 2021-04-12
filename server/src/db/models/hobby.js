"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class hobby extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			const { person, hobby } = models;
			// console.log(models);
			person.hasMany(hobby);
			hobby.belongsTo(person);
			// define association here
		}
	}
	hobby.init({
		name: DataTypes.STRING
	}, {
		sequelize,
		modelName: "hobby",
	});
	return hobby;
};