import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import MarcaQuery from './queries/marca.query.js';

const Schema = new GraphQLSchema({
    types: null,

    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            ...MarcaQuery,
        },
    }),
});

export default Schema;
