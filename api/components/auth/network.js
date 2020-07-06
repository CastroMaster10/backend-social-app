const express = require('express')
const router = express.Router();
const response = require('../../../network/response');
const controllers = require('./index');

router.post('/login', (req,res,next) => {
    controllers.login(req.body.username, req.body.password)  // el orden de los request si importan!
    .then(token => response.success(req,res, token, 200))
    .catch(next)
})

module.exports = router;