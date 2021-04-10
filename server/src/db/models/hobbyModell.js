const { DataTypes } = require("sequelize");

module.exports = (db) => {
	db.define("hobby", {
		id: {
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlphanumeric: true
			}
		}
	});
};