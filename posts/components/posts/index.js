const Store = require("../../../store/mysql");
const ctrl = require("./controllers");

module.exports = ctrl(Store);