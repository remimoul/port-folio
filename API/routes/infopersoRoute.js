const express = require('express');
const router = express.Router();
const infopersoControllers = require('../controllers/infopersoController');
const jwtMiddleware = require('../middleware/jwtMiddleware');


router.route('/add').post(jwtMiddleware.verifyToken,infopersoControllers.addInfoperso);

router.route('/update/:infoperso_id').put(jwtMiddleware.verifyToken,infopersoControllers.updateInfoperso);

router.route('/delete/:infoperso_id').delete(jwtMiddleware.verifyToken,infopersoControllers.deleteInfoperso);

router.route('/all').get(infopersoControllers.getInfoperso);

module.exports = router;
