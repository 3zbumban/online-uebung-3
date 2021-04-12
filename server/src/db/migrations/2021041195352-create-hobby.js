"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("hobbies", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			personId: {
				type: Sequelize.INTEGER,
				references: {
					model: "people",
					key: "id"
				}
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("hobbies");
	}
};