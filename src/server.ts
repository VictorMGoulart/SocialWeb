import express, { NextFunction, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message });
    }

    return response
      .status(500)
      .json({ status: 'error', message: 'Internal Server Error' });
  }
);

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(process.env.PORT || 3000, () => console.log('Server is Running'));
