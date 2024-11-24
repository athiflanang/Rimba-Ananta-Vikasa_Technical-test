const router = require('express').Router();
const userController = require('../controller/userController');
const authenticate = require('../middleware/authentication');
const errorHandler = require('../middleware/errorHandler');

router.post('/login', userController.login);
router.use(authenticate);

router.use(errorHandler)

module.exports = router;