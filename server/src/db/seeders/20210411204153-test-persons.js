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
		await queryInterface.bulkInsert("people", [
			{name: "stefan", alter: 21, createdAt: new Date(), updatedAt: new Date()},
			{name: "sven", alter: 25, createdAt: new Date(), updatedAt: new Date()},
			{name: "johan", alter: 27, createdAt: new Date(), updatedAt: new Date()},
			{name: "franz", alter: 28, createdAt: new Date(), updatedAt: new Date()}
		], {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		await queryInterface.bulkDelete("person", null, {});
	}
};
