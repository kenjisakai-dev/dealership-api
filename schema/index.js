import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import MarcaQuery from './queries/marca.query.js';
import marcaMutations from './mutations/marca.mutation.js';

const Schema = new GraphQLSchema({
  types: null,
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...MarcaQuery,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      ...marcaMutations,
    },
  }),
});

export default Schema;
