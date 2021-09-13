/** @format */
const router = require('express').Router();
const { isAuthenticated, isLoggedIn } = require('../controllers/auth');
const { addFav, showFav } = require('../controllers/fav');
const { getUserById } = require('../controllers/user');

router.param('userId', getUserById);

router.get('/user/:userId/showfav', isLoggedIn, isAuthenticated, showFav);
router.post('/user/:userId/addFav', isLoggedIn, isAuthenticated, addFav);
// router.get('/user/:userId/deleteFav', isLoggedIn, isAuthenticated, deleteFav);

module.exports = router;
