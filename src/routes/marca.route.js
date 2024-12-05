import express from 'express';
import marcaController from '../controllers/marca.controller.js';
import logger from '../loggs/logging.js';

const router = express.Router();

router.get('/maisModelos', marcaController.maisModelos);
router.get('/menosModelos', marcaController.menosModelos);
router.get('/listaMaisModelos/:qtd', marcaController.listaMaisModelos);
router.get('/listaMenosModelos/:qtd', marcaController.listaMenosModelos);
router.get('/obterModelo/:marca', marcaController.obterModelo);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl}${req.url} - ${err.message}`);
    res.status(400).send({ error: err.message });
});

export default router;
