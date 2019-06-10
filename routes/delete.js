var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let config = require(__dirname+'/config.js')


/* GET users listing. */
router.post('/', function(req, res, next) {
  var con = mysql.createConnection(config);
  con.connect();
    con.query("DELETE FROM movie WHERE movieId="+req.body["name"], function (err, result, fields) {
      if (err) throw err;
      console.log(req.body["name"]);
      res.render('index', { title: 'Movie deleted' });
    });
  con.end();
});

module.exports = router;