 const store = require("../../../store/mysql");
 const ctrl = require("./controllers");

 module.exports = ctrl(store);