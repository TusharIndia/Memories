const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')
require('dotenv').config();

connectToMongo();
const app = express();
const port = process.env.PORT;

app.use(cors(
    {
<<<<<<< HEAD
        origin: ["https://memories-seven-livid.vercel.app","localhost:3000"],
=======
        origin: ["https://memories-seven-livid.vercel.app"],
>>>>>>> 69fb74ee36d16b54b0675ddb57d9b5816d3e67e6
        methods: ["POST","GET"],
        credentials: true
    }
));
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/posts',require('./routes/posts'));

app.listen(port,() => {
    console.log(`Example is connected at the port https://localhost:${port}`)
})
