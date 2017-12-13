import { webpack } from 'config';
import * as fs from "async-file";
import React from 'React';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../../client/App';

const getAssetsMap = async () => {
	if (process.env.NODE_ENV === 'production') {
		let manifest = await fs.readFile('./public/manifest.json');
		return JSON.parse(manifest);
	}

	// assets are served via webpack dev server
	return {
		'app.js': `http://localhost:${webpack.devServer.port}/app.js`
	};
};

export const ssrAction = async (ctx) => {
	const assets = await getAssetsMap();
	const context = {};

	const reactString = renderToString(
		<StaticRouter context={context} location={ctx.url} >
			<App />
		</StaticRouter>
	);

	if (context.url) {
		// Somewhere a `<Redirect>` was rendered
		return ctx.redirect(context.status, context.url);
	}

	ctx.body = await ctx.render('./index.pug', {
		app: assets['app.js'],
		reactString
	});
};
