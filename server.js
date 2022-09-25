const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const studentRoute = require('./routes/studentRoute');
const userRoute = require('./routes/userRoute');

// dotenv config
dotenv.config();
const PORT = process.env.PORT || 4000;

// express init
const app = express();

// data manage
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// ejs setup
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/app');

// static folder
app.use(express.static('public'));

// routes
app.use('/student', studentRoute);
app.use('/user', userRoute);

// server listen 
app.listen(PORT, () => {
    console.log(`Server Running on Port ${ PORT }`.bgGreen.black);
})