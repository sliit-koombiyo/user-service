var mongoose        = require('../DBSchema/SchemaMapper');
var UserSchema 		= mongoose.model('User');

var UserController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var user = new UserSchema({
                empID: data.empID,
                userName: data.userName,
                password: data.password,
                role: data.role,
                joinedYear: data.joinedYear,
            });
           /* UserSchema.findOne({userName: req.res.userName}, function(err, user){
                if(err){
                    console.log(err);
                }
                var msg;
                if(user){
                    console.log(user);
                    msg='User exists';
                    console.log(msg);
                }else {
                    msg= "user doesn't exist";
                    console.log(message)
                }
                res.json({message: msg});
            });*/
           user.save().then(() => {
                    resolve({status: 200, message: "Added new user"});
                }).catch(err => {
                    reject({status: 500, message: "Error:- "+err});
                })
            
            
        });

    }

    this.update = (userName, data) => {
        return new Promise((resolve, reject) => {
            UserSchema.update({userName:userName}, data).then(() => {
                resolve({status: 200, message: "updated user"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        });
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            UserSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        });
    }

    this.search = (userName) => {
        return new Promise((resolve, reject) => {
            UserSchema.findOne({userName:userName}).exec().then(user => {
                console.log("User : " + user)
                if(user.userName === userName) {
                    resolve(user);
                } else {
                    reject(new Error('User not found'))
                }
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        });
    }

    this.delete = (userName) => {
        return new Promise((resolve, reject) => {
            UserSchema.remove({userName:userName}).then(() => {
                resolve({status: 200, message: "remove user"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        });
    }

    /*this.recover = (empID, userName, password)=>{
        return new Promise((resolve, reject)=>{
            if((UserSchema.empID===empID) && (UserSchema.userName=== userName)){
                UserSchema.findOneAndUpdate({userName:Username})
            }
        })
    }*/
}

module.exports = new UserController();