var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hola desde el ruteador de usuarios');
});



module.exports = router;
