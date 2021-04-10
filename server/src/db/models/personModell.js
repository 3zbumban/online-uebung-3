const { DataTypes } = require("sequelize");

module.exports = (db) => {
	db.define("person", {
		id: {
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		alter: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});
};