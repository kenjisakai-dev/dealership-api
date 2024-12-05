import express from 'express';
import logger from './src/loggs/logging.js';
import Schema from './src/graphQL/index.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './docs/doc.js';
import { graphqlHTTP } from 'express-graphql';
import marcaRouter from './src/routes/marca.route.js';

const app = express();
app.use(express.json());

app.use('/marcas', marcaRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
    '/graphQL',
    graphqlHTTP({
        schema: Schema,
        graphiql: true,
    }),
);

app.listen(3003, () => {
    logger.info(`API Started!`);
});
