var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let config = require(__dirname+'/config.js')



/* GET home page. */
router.get('/', function(req, res, next) {
  var con = mysql.createConnection(config);
  con.connect();
    con.query("SELECT * FROM movie", function (err, result, fields) {
      if (err) throw err;
      res.render('list', { data: result });
    });
  con.end();
});

module.exports = router;
