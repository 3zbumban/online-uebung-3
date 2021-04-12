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
				allowNull: false,
				references: {
					model: "people", // tabele für "person" heist people! (sequelize pluralisiert automatisch)
					key: "id" // primary key der people tabelle
				}
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("hobbies");
	}
};