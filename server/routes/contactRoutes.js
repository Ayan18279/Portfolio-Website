const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');
const { contactValidationRules, validate } = require('../middleware/validationMiddleware');

router.post('/', contactValidationRules(), validate, submitContact);

module.exports = router;
