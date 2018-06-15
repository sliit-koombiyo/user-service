var Express         = require("express");
var Routes          = Express.Router();
var UserRoute       = require('./src/User/User.Route');
var authRoute = require('./auth');

Routes.use('/user/', UserRoute);
Routes.use('/auth', authRoute);

module.exports = Routes;