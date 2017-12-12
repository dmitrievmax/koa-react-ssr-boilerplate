import Router from 'koa-router';
import fs from 'fs';

const router = new Router();

router.get('/', async (ctx) => {
	const file = fs.readFileSync('./index.html');
	ctx.body = file.toString();
});

export default router.routes();
