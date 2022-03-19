const mongoose = require('mongoose')

module.exports = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/exampledb');
        console.log("connected");
    } catch (error) {
        console.log("err: ", error);
    }
}