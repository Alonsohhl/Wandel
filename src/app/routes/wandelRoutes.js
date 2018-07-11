const router = require('express').Router();

const galtecController = require('../controllers/wandelController');

router.get('/', galtecController.index2);
router.get('/contacto', galtecController.contacto);


/*router.get('/test', galtecController.test);
router.get('/contacto', galtecController.contacto);
router.get('/nosotros', galtecController.nosotros);
router.get('/servicios', galtecController.servicios);
router.post('/enviar_msg', galtecController.enviar_msg);

*/
module.exports = router;
