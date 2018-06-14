var mongoose        = require('../DBSchema/SchemaMapper');
var UserSchema 		= mongoose.model('User');

var UserController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var user = new UserSchema({
              //  empID: data.empID,
                userName: data.userName,
                password: data.password,
                //role: data.role,
                //joinedYear: date.joinedYear
            });
            user.save().then(() => {
                resolve({status: 200, message: "Added new user"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })

    }

    this.update = (userName, data) => {
        return new Promise((resolve, reject) => {
            UserSchema.update({userName:userName}, data).then(() => {
                resolve({status: 200, message: "updated user"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            UserSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (userName) => {
        return new Promise((resolve, reject) => {
            UserSchema.find({userName:userName}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (userName) => {
        return new Promise((resolve, reject) => {
            UserSchema.remove({userName:userName}).then(() => {
                resolve({status: 200, message: "remove user"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
}

module.exports = new UserController();