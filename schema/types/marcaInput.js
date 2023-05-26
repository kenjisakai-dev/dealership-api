import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export const MarcaMutationsInput = new GraphQLInputObjectType({
  name: 'MarcaMutationsInput',
  fields: () => ({
    nomeMarca: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});
