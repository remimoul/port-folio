const express = require('express');
const router = express.Router();
const projetControllers = require('../controllers/projetController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

router.route('/add').post(jwtMiddleware.verifyToken,projetControllers.addProjet);

router.route('/update/:projet_id').put(jwtMiddleware.verifyToken,projetControllers.updateProjet);

router.route('/delete/:projet_id').delete(jwtMiddleware.verifyToken,projetControllers.deleteProjet);

router.route('/all').get(projetControllers.getProjet);

module.exports = router;
