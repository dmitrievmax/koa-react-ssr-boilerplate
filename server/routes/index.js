import test from './test';
import ssrRoutes from './ssrRoutes';

export default app => {
	app.use(test);
	app.use(ssrRoutes);
};
