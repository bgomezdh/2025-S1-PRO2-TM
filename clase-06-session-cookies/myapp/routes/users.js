const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', usersController.show);
router.post('/newuser/', usersController.create);

//login
router.get('/login', usersController.showLogin);
router.post('/login/', usersController.createLogin);

module.exports = router;