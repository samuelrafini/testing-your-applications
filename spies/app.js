
var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    //check if email already exist
    //save user to the database

        // db.saveUser({
        //     email: email,
        //     password: password
        // }) better ay with es syntax new no need to write property name when they are the same

        db.saveUser({
            email,
            password
        });

    //send the welcome email


}