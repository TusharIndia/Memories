require('dotenv').config();
const mongoose = require('mongoose')
// const mongouri = process.env.MONGODB_URI
const mongouri = "mongodb+srv://tj61676:61676@cluster0.n7ex1vf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = async () => {
    await mongoose.connect(mongouri)
    console.log("Connected to Mongodb Successfully")
}

module.exports = connectToMongo;
