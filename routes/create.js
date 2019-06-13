var express = require('express');
var router = express.Router();
// include mysql module
var mysql = require('mysql');
let config = require(__dirname+'/config.js')
 
// create a connection variable with the required details



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var con = mysql.createConnection(config); 
  console.log(req.body);
  
  // insert statment
  let sql = 'INSERT INTO movie(name,genre,year) VALUES("'+req.body.name+'","'+req.body.genre+'",'+req.body.year+')';

  con.connect(function(err) {
    if (err) throw err;
    // if connection is successful
    con.query(sql, function (err, result, fields) {
      // if any error while executing above query, throw error
      if (err) throw err;
      // if there is no error, you have the result
      res.send('Movie saved');
      console.log(result);
    }); 
  }); 
  con.end();
});

module.exports = router;
