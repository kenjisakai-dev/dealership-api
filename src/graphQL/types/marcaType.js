import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} from 'graphql';

export const ModeloType = new GraphQLObjectType({
    name: 'ModeloType',
    fields: () => ({
        marca: { type: GraphQLString },
        qtdModelos: { type: GraphQLInt },
        modelos: { type: new GraphQLList(GraphQLString) },
    }),
});

export const ModelosType = new GraphQLList(ModeloType);
