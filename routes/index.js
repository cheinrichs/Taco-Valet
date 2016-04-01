var express = require('express');
var router = express.Router();
var knex = require('../db/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Login Taco-Valet'
  });
});

router.post('/login', function(req, res, next) {
  knex('users').insert(req.body).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
