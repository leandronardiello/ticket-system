const express = require('express');
const { login } = require('./loginController');
const router = express.Router();

router.post('/login', login);

router.post('/loginController', async (req, res) => {
    // ... lógica para processar o login ...
  });

module.exports = router;
