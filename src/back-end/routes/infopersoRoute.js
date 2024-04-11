const express = require('express');
const router = express.Router();
const infopersoControllers = require('../controllers/infopersoController');

router.route('/add').post(infopersoControllers.addInfoperso);

router.route('/update/:infoperso_id').put(infopersoControllers.updateInfoperso);

router.route('/delete/:infoperso_id').delete(infopersoControllers.deleteInfoperso);

router.route('/all').get(infopersoControllers.getInfoperso);

module.exports = router;
