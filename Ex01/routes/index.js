const express = require('express');
const { login } = require('../services/login');
const { register } = require('../services/register');
const router = express.Router();


router.post('/login', async function(req, res) {
    const { email, password } = req.body;
    const result = await login(email, password);
    res.json(result);

})

router.post('/register', async function(req, res) {
    const result = await register(req.body);
    res.json(result);

})

module.exports = router;