var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'harga emas', desc: 'hari ini' });
});

module.exports = router;
