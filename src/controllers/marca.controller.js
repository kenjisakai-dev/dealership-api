import logger from '../loggs/logging.js';
import marcaService from '../services/marca.service.js';

async function maisModelos(req, res, next) {
    try {
        const resposta = await marcaService.maisModelos();

        logger.info(`GET /marcas/maisModelos - ${resposta.marca}`);

        return res.status(200).send(resposta);
    } catch (err) {
        next(err);
    }
}

async function menosModelos(req, res, next) {
    try {
        const resposta = await marcaService.menosModelos();

        logger.info(`GET /marcas/menosModelos - ${resposta.marca}`);

        return res.status(200).send(resposta);
    } catch (err) {
        next(err);
    }
}

async function listaMaisModelos(req, res, next) {
    try {
        const { qtd } = req.params;

        const resposta = await marcaService.listaMaisModelos(qtd);

        logger.info(
            `GET /marcas/listaMaisModelos/${qtd} - ${JSON.stringify(resposta)}`,
        );

        return res.status(200).send(resposta);
    } catch (err) {
        next(err);
    }
}

async function listaMenosModelos(req, res, next) {
    try {
        const { qtd } = req.params;

        const resposta = await marcaService.listaMenosModelos(qtd);

        logger.info(
            `GET /marcas/listaMenosModelos/${qtd} - ${JSON.stringify(
                resposta,
            )}`,
        );

        return res.status(200).send(resposta);
    } catch (err) {
        next(err);
    }
}

async function obterModelo(req, res, next) {
    try {
        const { marca } = req.params;

        const resposta = await marcaService.obterModelo(marca);

        logger.info(
            `POST /marcas/obterModelo/${marca}: ${JSON.stringify(resposta)}`,
        );

        return res.status(200).send(resposta);
    } catch (err) {
        next(err);
    }
}

export default {
    maisModelos,
    menosModelos,
    listaMaisModelos,
    listaMenosModelos,
    obterModelo,
};
