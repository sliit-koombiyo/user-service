const Express       = require("express");
const BodyParser    = require("body-parser");
const Routes        = require("./Routes");
const Cors          = require("cors");
const Mongoose = require("mongoose");

var jwt    = require('jsonwebtoken');

const port = process.env.PORT || 5001
const app = Express();
app.use(Cors());

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use('/', Routes);

Mongoose.connect('mongodb://abc123:abc123@ds147450.mlab.com:47450/koombiyo-af', err=>{
    if(err){
        console.log(err);
    }
    console.log('Connected to DB');
});



app.listen(port, (err) => {
    if(err) {
        console.log(err);
        process.exit(-1);
    }

    console.log("Server listen port " + port);

});
