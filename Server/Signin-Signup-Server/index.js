const express = require('express');
const connection = require('./connection/connection');
const cors = require("cors");
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
require("dotenv").config()
const auth = require('./middleware/auth');
const {client}=require("./connection/redis");

const app = express()

app.use(express.json())

app.use(cors())

app.use("/user", userRouter)
app.use(auth)
app.use("/", postRouter)

app.listen(process.env.Port, async () => {
    try {
        await connection
        console.log("Connected to Database succesfully");
        await client.connect();
        console.log("connected to redis");
    } catch (error) {
        console.log(error);
        console.log("Some error while connicting to DB");
    }
    console.log(`server is connected to port no ${process.env.Port}`);
})