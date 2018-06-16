var express     = require('express');
var router      = express.Router();
var Controller  = require('./User.Controller');
var jwt = require('jsonwebtoken');

router.post('/register', (req, res,next) => {
    Controller.insert(req.body).then((data) => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })        
});


router.put('/:userName', (req, res) => {
    Controller.update(req.params.userName, req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/', (req, res) => {
    Controller.searchAll().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:userName', (req, res) => {
    Controller.search(req.params.userName).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.delete('/:userName', (req, res) => {
    Controller.delete(req.params.userName).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;