"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
		await queryInterface.bulkInsert("people", [{
			name: "John Doe",
			alter: 20,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "sven",
			alter: 18,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "stefan",
			alter: 30,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "bobby",
			alter: 31,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		await queryInterface.bulkDelete("hobbies", null, {});
		await queryInterface.bulkDelete("people", null, {});
	}
};
