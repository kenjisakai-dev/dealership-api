import MarcaService from '../services/marca.service.js';

async function maisModelos(_, res, next) {
  try {
    const brands = await MarcaService.maisModelos();

    res.send(brands);
    global.logger.info(`GET /marcas/maisModelos - ${brands}`);
  } catch (err) {
    next(err);
  }
}

async function menosModelos(req, res, next) {
  try {
    const brands = await MarcaService.menosModelos();

    res.send(brands);
    global.logger.info(`GET /marcas/menosModelos - ${brands}`);
  } catch (err) {
    next(err);
  }
}

async function listaMaisModelos(req, res, next) {
  try {
    const brands = await MarcaService.listaMaisModelos(req.params.qnt);

    res.send(brands);
    global.logger.info(
      `GET /marcas/listaMaisModelos/${req.params.qnt} - ${JSON.stringify(
        brands
      )}`
    );
  } catch (err) {
    next(err);
  }
}

async function listaMenosModelos(req, res, next) {
  try {
    const brands = await MarcaService.listaMenosModelos(req.params.qnt);

    res.send(brands);
    global.logger.info(
      `GET /marcas/listaMenosModelos/${req.params.qnt} - ${JSON.stringify(
        brands
      )}`
    );
  } catch (err) {
    next(err);
  }
}

async function listaModelos(req, res, next) {
  try {
    const marca = req.body.marca;
    if (!marca) throw new Error('A Marca é obrigatória.');

    const models = await MarcaService.listaModelos(marca);

    res.send(models);
    global.logger.info(
      `POST /marcas/listaModelos - ${req.body.marca}: ${JSON.stringify(models)}`
    );
  } catch (err) {
    next(err);
  }
}

export default {
  maisModelos,
  menosModelos,
  listaMaisModelos,
  listaMenosModelos,
  listaModelos,
};
