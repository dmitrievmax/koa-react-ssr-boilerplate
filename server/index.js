import Koa from 'koa';
import { middlewares, port } from 'config';
import routes from './routes';

const app = new Koa();

// middlewares
middlewares.forEach(middleware => require(`./middlewares/${middleware}`).init(app));

// routes
routes(app);

app.listen(port, () => console.log(`Up and running on port ${port}`));
