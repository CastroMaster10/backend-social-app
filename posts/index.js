const express = require('express')
const app = new express();
const config = require('../config')
const bodyParser = require('body-parser');
const posts = require('./components/posts/network');
const errors = require('../network/errors');


app.use(bodyParser.json())

// routes

app.use('/api/posts', posts)

app.use(errors);

app.listen(config.post.port, (req, res) => {
    console.log(`Servidor lanzado en puerto ${config.post.port}`)
})