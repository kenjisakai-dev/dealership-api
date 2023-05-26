import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import MarcaService from '../../services/marca.service.js';

const MarcaQueries = {
  maisModelos: {
    type: GraphQLString,
    resolve: () => MarcaService.maisModelos(),
  },
  menosModelos: {
    type: GraphQLString,
    resolve: () => MarcaService.menosModelos(),
  },
  listaMaisModelos: {
    type: new GraphQLList(GraphQLString),
    args: {
      qnt: {
        name: 'qnt',
        type: GraphQLInt,
      },
    },
    resolve: (_, args) => MarcaService.listaMaisModelos(args.qnt),
  },
  listaMenosModelos: {
    type: new GraphQLList(GraphQLString),
    args: {
      qnt: {
        name: 'qnt',
        type: GraphQLInt,
      },
    },
    resolve: (_, args) => MarcaService.listaMenosModelos(args.qnt),
  },
};

export default MarcaQueries;
