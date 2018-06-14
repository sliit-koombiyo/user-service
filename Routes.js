var Express         = require("express");
var Routes          = Express.Router();
var UserRoute       = require('./src/User/User.Route');

Routes.use('/user/', UserRoute);

module.exports = Routes;