export const swaggerDocument = {
  swagger: '2.0',
  info: {
    title: 'Dealership API',
    description: 'Read Dealership API',
    version: '1.0.0',
  },
  host: 'localhost:3004',
  paths: {
    '/marcas/maisModelos': {
      get: {
        tags: ['Marcas'],
        summary: 'Obter a marca com mais modelos',
        description:
          'Essa rota será responsável por obter a marca com mais modelos',
        responses: {
          200: {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
                  example: 'Mercedes-Benz',
                },
              },
            },
          },
          400: {
            description: 'Error occurred',
          },
        },
      },
    },
    '/marcas/menosModelos': {
      get: {
        tags: ['Marcas'],
        summary: 'Obter a marca com menos modelos',
        description:
          'Essa rota será responsável por obter a marca com menos modelos',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
                  example: 'Hummer',
                },
              },
            },
          },
          400: {
            description: 'Error occurred',
          },
        },
      },
    },
    '/marcas/listaMaisModelos/{qnt}': {
      get: {
        tags: ['Marcas'],
        summary: 'Obter uma qunatidade das marcas com mais modelos',
        description:
          'Essa rota será responsável por obter uma quantidade das marcas com mais modelos',
        produces: ['application/json'],
        parameters: [
          {
            name: 'qnt',
            in: 'path',
            description: 'Retornar uma quantidade de marcas com mais modelos',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
                  example: [
                    'Mercedes-Benz - 58',
                    'Fiat - 48',
                    'Volkswagen - 48',
                    'Ford - 46',
                    'Audi - 45',
                  ],
                },
              },
            },
          },
          400: {
            description: 'Error occurred',
          },
        },
      },
    },
    '/marcas/listaMenosModelos/{qnt}': {
      get: {
        tags: ['Marcas'],
        summary: 'Obter uma qunatidade das marcas com menos modelos',
        description:
          'Essa rota será responsável por obter uma quantidade das marcas com menos modelos',
        produces: ['application/json'],
        parameters: [
          {
            name: 'qnt',
            in: 'path',
            description: 'Retornar uma quantidade de marcas com menos modelos',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
                  example: [
                    'Hummer - 2',
                    'Infiniti - 7',
                    'Jeep - 7',
                    'Smart - 7',
                    'Dacia - 8',
                  ],
                },
              },
            },
          },
          400: {
            description: 'Error occurred',
          },
        },
      },
    },
    '/marcas/listaModelos': {
      post: {
        tags: ['Marcas'],
        summary: 'Obter a lista dos modelos de uma marca',
        description:
          'Essa rota será responsável por obter uma lista com os modelos de uma marca',
        produces: ['application/json'],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                properties: {
                  nomeMarca: {
                    type: 'string',
                    example: 'fiat',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
                  example: [
                    '1100',
                    '126',
                    '500',
                    '500L',
                    '500X',
                    '850',
                    'Barchetta',
                    'Brava',
                    'Cinquecento',
                    'Coupé',
                    'Croma',
                    'Doblo',
                    'Doblo Cargo',
                    'Doblo Cargo Combi',
                    'Ducato',
                    'Ducato Van',
                    'Ducato Kombi',
                    'Ducato Podvozok',
                    'Florino',
                    'Florino Combi',
                    'Freemont',
                    'Grande Punto',
                    'Idea',
                    'Linea',
                    'Marea',
                    'Marea Weekend',
                    'Multipla',
                    'Palio Weekend',
                    'Panda',
                    'Panda Van',
                    'Punto',
                    'Punto Cabriolet',
                    'Punto Evo',
                    'Punto Van',
                    'Qubo',
                    'Scudo',
                    'Scudo Van',
                    'Scudo Kombi',
                    'Sedici',
                    'Seicento',
                    'Stilo',
                    'Stilo Multiwagon',
                    'Strada',
                    'Talento',
                    'Tipo',
                    'Ulysse',
                    'Uno',
                    'X1/9',
                  ],
                },
              },
            },
          },
          400: {
            description: 'Error occurred',
          },
        },
      },
    },
  },
  definitions: {
    CarList: {
      type: 'object',
      properties: {
        brand: {
          type: 'string',
          example: 'Hummer',
        },
        models: {
          type: 'string',
          example: ['H2', 'H3'],
        },
      },
    },
  },
};
