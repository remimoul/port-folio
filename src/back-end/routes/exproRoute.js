const express = require('express');
const router = express.Router();
const infoproControllers = require('../controllers/exproController');

router.route('/add').post(infoproControllers.addInfopro);

router.route('/update/:expro_id').put(infoproControllers.updateInfopro);

router.route('/delete/:expro_id').delete(infoproControllers.deleteInfopro);

router.route('/all').get(infoproControllers.getInfopro);

module.exports = router;
