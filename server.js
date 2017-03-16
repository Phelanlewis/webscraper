var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

request('https://www.rhs.org.uk/advice/grow-your-own/vegetables/broccoli', function (error, response, html) {
  var $ = cheerio.load(html);
  console.log($.html('p'));
});

exports = module.exports = app;
