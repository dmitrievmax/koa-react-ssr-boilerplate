import favicon from 'koa-favicon';
import config from 'config';

exports.init = app => app.use(favicon(__dirname + config.pathToFavicon));