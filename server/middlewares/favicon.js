import favicon from 'koa-favicon';

exports.init = app => app.use(favicon(__dirname + ''));