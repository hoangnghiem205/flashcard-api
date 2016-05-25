module.exports = function(mongoose) {

	var Schema = mongoose.Schema;
	var mongoosePages = require('mongoose-pages');

	// create a schema
	var cardsSchema = new Schema({
		//Define schema object
		lesson: String,
		kanji: String,
		hira: String,
		kata: String,
		mean: String,
		img: String,
		voice: String,
		created_at: String,
		
	}, {collection: 'cards'});
	mongoosePages.skip(cardsSchema); // makes the findPaginated() method available

	return mongoose.model('cards', cardsSchema);
}
