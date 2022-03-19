const { Users, user } = require("../models/user");
var bcrypt = require('bcryptjs');

const register = async(params) => {
    const { email, username, firstname, lastname, password } = params;

    const saltRounds = 10;
    const myPlaintextPassword = password;
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    try {
        const newUser = {
            "email": email,
            "username": username,
            "firstname": firstname,
            "lastname": lastname,
            "password": hash
        }

        //add newUser to users
        const createUser = await user.create(newUser);
        //write users to DB
        return { "status": "true", "message": "User create successfull", "data": createUser };

    } catch (error) {
        return { "status": "false", "message": error };
    }

}

module.exports = {
    register,
}