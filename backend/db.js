require('dotenv').config();
const mongoose = require('mongoose')
const mongouri = process.env.MONGODB_URI

const connectToMongo = async () => {
    await mongoose.connect(mongouri)
    console.log("Connected to Mongodb Successfully")
}

module.exports = connectToMongo;