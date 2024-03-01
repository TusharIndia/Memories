const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' // Assuming your user model is named 'User'
    },
    backgroundImg: {
        type: String,
        default: "https://www.icegif.com/wp-content/uploads/2023/03/icegif-1393.gif"
    },
    pict: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkaKgv8SEPg8ORU8NJd-fJb2PUSwdI3cBlQE4c1nFLuw&s"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isPublic: { // Renamed from publictyp
        type: Boolean,
        default: false
    },
    like: [
        { user_id: String, username: String}
    ],
    comments: [
        { body: String, username: String,date: Date }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
