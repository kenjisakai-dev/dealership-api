export const swaggerDocument = {
    swagger: '2.0',
    info: {
        title: 'Dealership API',
        version: '1.0.0',
    },
    host: 'localhost:3003',
    paths: {
        '/marcas/maisModelos': {
            get: {
                tags: ['Marcas'],
                description:
                    'Endpoint responsável por obter marca com mais modelos',
                responses: {
                    200: {
                        description: 'OK',
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
        '/marcas/menosModelos': {
            get: {
                tags: ['Marcas'],
                description:
                    'Endpoint responsável por obter marca com menos modelos',
                responses: {
                    200: {
                        description: 'OK',
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
        '/marcas/listaMaisModelos/{qnt}': {
            get: {
                tags: ['Marcas'],
                description:
                    'Endpoint responsável por obter lista com mais modelos',
                produces: ['application/json'],
                parameters: [
                    {
                        name: 'qnt',
                        in: 'path',
                        description:
                            'O parâmetro define a quantidade de marcas com mais modelos serão retornados',
                        required: true,
                    },
                ],
                responses: {
                    200: {
                        description: 'OK',
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
        '/marcas/listaMenosModelos/{qnt}': {
            get: {
                tags: ['Marcas'],
                description:
                    'Endpoint responsável por obter lista com menos modelos',
                parameters: [
                    {
                        name: 'qnt',
                        in: 'path',
                        description:
                            'O parâmetro define a quantidade de marcas com menos modelos serão retornados',
                        required: true,
                    },
                ],
                responses: {
                    200: {
                        description: 'OK',
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
        '/marcas/obterModelo/{marca}': {
            get: {
                tags: ['Marcas'],
                description: 'Endpoint responsável por obter uma marca',
                parameters: [
                    {
                        name: 'marca',
                        in: 'path',
                        description:
                            'O parâmetro é usado para procurar uma marca',
                        required: true,
                    },
                ],
                responses: {
                    200: {
                        description: 'OK',
                    },
                    400: {
                        description: 'Bad Request',
                    },
                },
            },
        },
    },
};
