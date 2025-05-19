const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', usersController.show);
router.post('/newuser/', usersController.create);

module.exports = router;