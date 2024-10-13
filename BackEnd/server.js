const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const movieRoute = require('./routes/movieRoute');

// 1. check if db is connected
connectDB();
// 2. use cors()
app.use(cors());
// 3. use express.json() first as it will check for content-type is json or not
app.use(express.json());
// 4. for /users, map the handlers
app.use("/bms/users", userRoute);
app.use("/bms/movies", movieRoute);


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server is running on port:${port}`);
});