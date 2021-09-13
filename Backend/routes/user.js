/** @format */

const router = require('express').Router();

const { isLoggedIn, isAuthenticated } = require('../controllers/auth');
const { getUserById, getUser, updateUser } = require('../controllers/user');

router.param('userId', getUserById);

router.get('/user/:userId', isLoggedIn, isAuthenticated, getUser);
router.put('/user/:userId', isLoggedIn, isAuthenticated, updateUser);
// router.put('orders/user/:userId', isLoggedIn, isAuthenticated);

module.exports = router;
