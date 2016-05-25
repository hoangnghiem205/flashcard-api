module.exports = function(mongoose) {

	var Schema = mongoose.Schema;
	var mongoosePages = require('mongoose-pages');

	// create a schema
	var lessonsSchema = new Schema({
		//Define schema object
		title: String,
		created_at: String,
		
	}, {collection: 'lessons'});
	mongoosePages.skip(lessonsSchema); // makes the findPaginated() method available

	return mongoose.model('lessons', lessonsSchema);
}
