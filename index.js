// console.log("application started")

/**
 * require and initiate express, cheerio and axios modules
 */

const express = require('express');

const { connectDb } = require("./db/connectdb");
const newsRoute = require('./db/routes/newsRoutes');
const { updateDatabase } = require('./db/dbControllers/controller');

require('dotenv').config();
const PORT = process.env.PORT;
//connect database
connectDb();
//setup server
const app = express();
//use express router
app.use('/', newsRoute);

//update db state every 10mins

setInterval(() => {
        console.log("timer every 10s")
        updateDatabase();
    }, 4 * 60 * 1000)
    //listen to server 
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))