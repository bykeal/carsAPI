const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
// const { json } = require('express');
const carRouter = require('./routes/carRoute');
dotenv.config();

const app = express();

// app.use(express.json());

// app.use(express.static(`${__dirname}/public`));

app.use(morgan("dev")); //middleware

app.use(bodyParser.json());

app.get("/", (req,res) => {
 res.status = 200;
 res.json({response: "server is live"});
});

app.use('/api/v1/cars', carRouter);

app.use((req,res,next) => {
    const err = new Error("Page Not found");
    err.status = 404;
    next(err);
});

app.use((err,req,res,next) => {
    res.status(err.status || 500);
    res.json({success:"false" , error:err.message})
});




module.exports = app;