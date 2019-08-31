const express = require('express');
const handlebars = require('hbs');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The realm of HOB', hidemenu: true });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About HOB' });
});

handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});

handlebars.registerHelper('ifnEquals', function(arg1, arg2, options) {
    return (arg1 !== arg2) ? options.fn(this) : options.inverse(this);
});

module.exports = router;
