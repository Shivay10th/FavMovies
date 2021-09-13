/** @format */

const router = require('express').Router();
const { popular, latest, discover } = require('../controllers/movies');

router.get('/popular', popular);
router.get('/discover', discover);
router.get('/latest', latest);

module.exports = router;
