'use strict';

const messages = require('./controllers/messages');
const home = require('./controllers/home');
const newuser = require('./controllers/newuser');
const searchresult = require('./controllers/search-result');
const user = require('./controllers/user');
const error = require('./controllers/error');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const KeyGrip = require('keygrip');
const app = module.exports = koa();


// Cookies
app.keys = new KeyGrip(['secret 1', 'secret 2'], 'sha256');

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
app.use(route.get('/error', error.error));

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
	const port = (process.env.PORT || 5000);

	app.listen(port);
	console.log('listening on port: ' + port);
}
