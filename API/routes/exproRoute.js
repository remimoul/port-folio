const express = require('express');
const router = express.Router();
const infoproControllers = require('../controllers/exproController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

router.route('/add').post(jwtMiddleware.verifyToken,infoproControllers.addInfopro);

router.route('/update/:expro_id').put(jwtMiddleware.verifyToken,infoproControllers.updateInfopro);

router.route('/delete/:expro_id').delete(jwtMiddleware.verifyToken,infoproControllers.deleteInfopro);

router.route('/all').get(infoproControllers.getInfopro);

module.exports = router;
