import pug from 'pug';

exports.init = app => app.use(async (ctx, next) => {
	ctx.render = pug.renderFile;

	await next();
});
