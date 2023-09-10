const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.registerCompany);
router.post('/get-token', authController.getAccessToken);

module.exports = router;
