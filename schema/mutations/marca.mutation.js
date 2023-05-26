import { GraphQLList, GraphQLString } from 'graphql';
import { MarcaMutationsInput } from '../types/marcaInput.js';
import MarcaService from '../../services/marca.service.js';

const marcaMutations = {
  listaModelos: {
    type: new GraphQLList(GraphQLString),
    args: {
      marca: {
        name: 'marca',
        type: MarcaMutationsInput,
      },
    },
    resolve(_, args) {
      return MarcaService.listaModelos(args.marca);
    },
  },
};

export default marcaMutations;
