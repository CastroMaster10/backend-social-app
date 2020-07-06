const store = require('../../../store/mysql');
// const store = require('../../../store/remote-mysql');
const ctrl = require('./controllers');

module.exports= ctrl(store)