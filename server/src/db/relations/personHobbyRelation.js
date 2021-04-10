module.exports = (db) => {
	const { person, hobby } = db.models;
	// person has many hobbys
	person.hasMany(hobby);
	// hobbys belongs to person
	hobby.belongsTo(person);
};
