'use strict';

const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
    map: { html: 'swig' }
});

module.exports.newpass = function *home (ctx) {
    this.body = yield render('newpass', {});
};
