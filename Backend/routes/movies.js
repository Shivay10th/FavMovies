/** @format */

const router = require('express').Router();
const {
	popular,
	latest,
	discover,
	getMovie,
} = require('../controllers/movies');

router.get('/popular', popular);
router.get('/discover', discover);
router.get('/latest', latest);
router.get('/get_movie/:movieId', getMovie);

module.exports = router;
