var express = require('express');
var router = express.Router();
var glossaryService = require('../services/glossary');

/* GET home page. */
router.get('/', function (req, res, next) {
  const glossaryData = glossaryService.getGlossary();
  res.render('index', {
    title: 'SIT722 DevOps Glossary',
    subtitle: 'Welcome to my website showing a collection of DevOps terms and their brief description.',
    data: glossaryData
  });
});

module.exports = router;
