const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

mongoose.connect(`mongodb+srv://chibuike:chibyke1935@cluster0.wnqd5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .catch(err => {
        console.log("connection failed !!");
    });



//Port number
const port = 5000;
//Starting the server
app.listen(port, ()=> {
    console.log("App running at port " + port);
});
