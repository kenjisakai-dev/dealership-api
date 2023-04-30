import express from 'express';
import MarcaController from '../controllers/marca.controller.js';

const router = express.Router();

router.get('/maisModelos', MarcaController.maisModelos);
router.get('/menosModelos', MarcaController.menosModelos);
router.get('/listaMaisModelos/:qnt', MarcaController.listaMaisModelos);
router.get('/listaMenosModelos/:qnt', MarcaController.listaMenosModelos);
router.post('/listaModelos', MarcaController.listaModelos);

router.use((err, req, res, next) => {
  global.logger.error(
    `${req.method} ${req.baseUrl}${req.url} - ${err.message}`
  );
  res.status(400).send({ error: err.message });
});

export default router;
