import Router from 'koa-router';
import { ssrAction } from './controller';

const router = new Router();

router.get('/*', ssrAction);

export default router.routes();
