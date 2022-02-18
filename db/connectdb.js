//import mongoose
const mongoose = require('mongoose');

module.exports.connectDb = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/cryptonewsapi', (error) => {
            if (error) {
                console.log(error.message)
            } else {
                console.log("connection successful")

            }
        });

    } catch (error) {
        console.log('error occured', error.message);
    }

}