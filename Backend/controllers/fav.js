/** @format */
const Fav = require('../models/fav');
const User = require('../models/user');
exports.addFav = async (req, res) => {
	const movieId = req.body.id;
	const user = req.profile;
	try {
		const fav = new Fav({ movieId });
		await fav.save();
		console.log(typeof +' ' + fav);
		user.fav.push(fav);
		await user.save();
		return res.status(200).json({
			msg: 'success',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.showFav = async (req, res) => {
	const id = req.profile._id;
	User.findById(id)
		.populate('fav')
		.exec((err, user) => {
			if (err) console.log(err);
			else {
				if (!user) {
					return res.status(404).json({
						msg: 'User Not Found',
					});
				} else {
					console.log(user.fav);
					return res.status(200).json(user.fav);
				}
			}
		});
};
