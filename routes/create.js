var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send('Movie saved');
});

module.exports = router;
