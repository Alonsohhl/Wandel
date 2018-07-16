const router = require('express').Router();

const wandelController = require('../controllers/wandelController');

router.get('/', wandelController.index2);
router.get('/contacto', wandelController.contacto);
router.get('/productos', wandelController.productos);
router.get('/nosotros', wandelController.nosotros);

/*router.get('/test', galtecController.test);
router.get('/contacto', galtecController.contacto);
router.get('/nosotros', galtecController.nosotros);
router.get('/servicios', galtecController.servicios);
router.post('/enviar_msg', galtecController.enviar_msg);

*/
module.exports = router;
