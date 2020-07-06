const express = require('express')
const app = new express();
const config = require('../config')
const user = require('./components/user/network');  
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const auth = require('./components/auth/network')
const SwaggerDocs = require('./swagger.json')
const errors = require('../network/errors');


app.use(bodyParser.json())

// routes
app.use('/api/user', user);
app.use('/api/auth', auth);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SwaggerDocs));
app.use(errors);

app.listen(config.api.port, (req,res) => {
    console.log(`Servidor lanzado en puerto ${config.api.port}`)
})