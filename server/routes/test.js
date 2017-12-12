import Router from 'koa-router';

const router = new Router();

router.get('/test', async (ctx) => ctx.body = '123sdf');

export default router.routes();
