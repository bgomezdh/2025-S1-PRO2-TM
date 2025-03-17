//1
const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

//2
router.get('/', productController.index); // lista todos los autos

router.get('/brand/:brand', productController.filtrarMarca );





//3
module.exports = router;