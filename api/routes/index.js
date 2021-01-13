var express = require('express');
var router = express.Router();

const data = require('../rushing.json');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(data));
});

module.exports = router;
