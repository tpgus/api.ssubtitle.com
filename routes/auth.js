const router = require('express').Router();

const authController = require('../controllers/auth');

router.post('/login', authController);

module.exports = router;
