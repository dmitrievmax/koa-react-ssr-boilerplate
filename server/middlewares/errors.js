exports.init =  app => app.use(async (ctx, next) => {
	try {
		await next();
	} catch (e) {
		const preferredType = ctx.accepts('html', 'json');

		if (e.status) {
			// could use template methods to render error page
			ctx.body = e.message;
			ctx.status = e.status;
		} else if (e.name === "ValidationError") {
			const errors = {};

			ctx.status = 400;

			for (let field in e.errors) {
				errors[field] = e.errors[field].message;
			}

			if (preferredType === 'json') {
				return ctx.body = { errors };
			}
			ctx.body = "Некорректные данные.";

		} else {
			ctx.body = 'Error 500!';
			ctx.status = 500;
			console.error(e.message, e.stack);
		}
	}
});