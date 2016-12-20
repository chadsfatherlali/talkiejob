'use strict';

const messages = require('./controllers/messages');
const home = require('./controllers/home');
const newuser = require('./controllers/newuser');
const searchresult = require('./controllers/search-result');
const user = require('./controllers/user');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const app = module.exports = koa();

// Logger
app.use(logger());

/*app.use(route.get('/', messages.home));
app.use(route.get('/messages', messages.list));
app.use(route.get('/messages/:id', messages.fetch));
app.use(route.post('/messages', messages.create));
app.use(route.get('/async', messages.delay));
app.use(route.get('/promise', messages.promise));*/

app.use(route.get('/', home.home));
app.use(route.get('/newuser', newuser.newuser));
app.use(route.get('/search-result', searchresult.searchresult));
app.use(route.get('/user', user.user));

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen((process.env.PORT || 5000));
  //console.log('listening on port 3000');
}
