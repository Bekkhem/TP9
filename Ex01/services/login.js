const { Users } = require("../models/user");

const login = async(email, password) => {

    if (!email || !password) {
        let sendEror = JSON.parse('{ "status": "false", "message": "Enter an email or password" }');
        return sendEror;
    } else {
        try {
            const userFind = await Users.findOne({
                email
            });

            if (userFind.email != email) {
                return { "status": "false", "message": "Email or password is incorrect" };
            } else {
                if (password != userFind.password) {
                    return { "status": "false", "message": "Email or password is incorrect" };
                } else {
                    return { "status": "true", "message": "Log in successful", "data": userFind };
                }
            }
        } catch (error) {
            return { "status": "false", "message": error }
        }
    }
}

module.exports = {
    login,
}