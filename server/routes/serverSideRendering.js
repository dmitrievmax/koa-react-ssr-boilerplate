import Router from 'koa-router';
import { ssrAction } from '../serverSideRendering/ssrController';

const router = new Router();

router.get('/*', ssrAction);

export default router.routes();
