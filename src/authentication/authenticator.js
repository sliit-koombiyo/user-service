var jwt = require('jsonwebtoken');

const JWT_TOKEN = "JSONWEBTOKEN";

module.exports.authenticator = function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['authentication'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, JWT_TOKEN, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.', err: err });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
}