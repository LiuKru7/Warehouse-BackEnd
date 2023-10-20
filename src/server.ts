import express from 'express';
import mongoose from 'mongoose';
const router = require("./router/mainRouter")
const cors = require('cors')
require("dotenv").config()
const server = express();

mongoose.connect(process.env.DB_KEY!)
    .then(() => {
        console.log("Connection success");
    }).catch((e: string) => {
    console.log("ERROR", e);
});
server.use(express.json());
server.use(cors());
server.use("/", router);
const port = 3080;
server.listen(port);
