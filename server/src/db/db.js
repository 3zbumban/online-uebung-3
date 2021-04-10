const { Sequelize } = require("sequelize");
const personHobbyRealtion = require("./relations/personHobbyRelation");

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: "localhost",
	port: 5432,
	dialect: "postgres"
});

const modelDefiners = [
	require("./models/personModell"),
	require("./models/hobbyModell"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

sequelize.authenticate()
	.then(() => {
		console.log("[d] connected to db");
	}).catch((err) => {
		console.log("[d] " + err.message);
	});


personHobbyRealtion(sequelize);
sequelize.sync({force: true});

module.exports = sequelize;