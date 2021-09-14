/** @format */

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

favSchema = new mongoose.Schema(
	{
		movieId: {
			type: String,
			unique: true,
		},
	},
	{ timestamps: true },
);
// console.log(productSchema.path('sold'));
module.exports = mongoose.model('Fav', favSchema);
