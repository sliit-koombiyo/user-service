var Mongoose 		= require('mongoose');
const Schema        = Mongoose.Schema;

const UserSchema = new Schema({
    empID: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    joinedYear: {
        type: String,
    },    
});

Mongoose.model('User', UserSchema);

module.exports = Mongoose;