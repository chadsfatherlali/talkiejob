'use strict';

const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.home = function *home (ctx) {
  this.cookies.set('cookie', 'lala', {
  	signed: true,
  	httpOnly: true
  });
  
  this.body = yield render('home', {});
};
