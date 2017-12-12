import serve from 'koa-static';
import config from 'config';

exports.init = app => app.use(serve('public', {
	maxage: config.static.maxage
}));
