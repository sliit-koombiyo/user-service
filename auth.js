var router = require('express').Router();
var jwt = require('jsonwebtoken');
var userController = require('./src/User/User.Controller');

const JWT_TOKEN = "JSONWEBTOKEN";

router.post('/auth', function (req, res) {
    userController.search(req.body.userName)
        .then(function (user) {
            if (user.password !== req.body.password) {
                res.send("password incorrect");
            } else {

                const tokenPayload = {
                    username: user.username,
                    password: user.password,
                    role: user.role,
                };
                var token = jwt.sign({ data: tokenPayload }, JWT_TOKEN, { expiresIn: '1d' });
                console.log("TOKEN : " + token);

                res.json({
                    success: true,
                    message: 'token generated',
                    token: token
                });

            }
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;