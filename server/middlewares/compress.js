import compress from 'koa-compress';
import config  from 'config';

exports.init = app => app.use(compress({
	threshold: config.compress.threshold
}));