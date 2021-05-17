const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();
//set up express
const app = express();
var cookieParser = require("cookie-parser");
const path = require('path');



app.use(express.json());


app.use(cors());

app.use(expressValidator());  


app.use(cookieParser());


const PORT = process.env.PORT || 3001


app.listen(PORT, ()=> console.log(`server has started at port ${PORT}`));

//set up mongoose
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false, 
        keepAlive: true
    },
    (err) => {
        if (err) throw err;
        console.log("MongoDB connected");
    }); 






const companies = require('./routes/CompaniesRoute');



app.use('/companies', companies);





