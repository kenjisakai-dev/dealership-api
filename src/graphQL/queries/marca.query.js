import { GraphQLInt, GraphQLString } from 'graphql';
import { ModeloType, ModelosType } from '../types/marcaType.js';
import marcaService from '../../services/marca.service.js';

const MarcaQueries = {
    maisModelos: {
        type: ModeloType,
        resolve: async () => await marcaService.maisModelos(),
    },

    menosModelos: {
        type: ModeloType,
        resolve: async () => await marcaService.menosModelos(),
    },

    listaMaisModelos: {
        type: ModelosType,
        args: {
            qtd: {
                name: 'qtd',
                type: GraphQLInt,
            },
        },
        resolve: async (_, args) =>
            await marcaService.listaMaisModelos(args.qtd),
    },

    listaMenosModelos: {
        type: ModelosType,
        args: {
            qtd: {
                name: 'qtd',
                type: GraphQLInt,
            },
        },
        resolve: async (_, args) =>
            await marcaService.listaMenosModelos(args.qtd),
    },

    obterModelo: {
        type: ModeloType,
        args: {
            marca: {
                name: 'marca',
                type: GraphQLString,
            },
        },
        resolve: async (_, args) => await marcaService.obterModelo(args.marca),
    },
};

export default MarcaQueries;
