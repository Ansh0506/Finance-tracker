require('dotenv').config({path: './.env'});
const express = require('express');
const cors = require('cors');
const {connectDB} = require('./src/DB/index.js')


connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => 
    console.log(`Server running on port ${process.env.PORT}`)
);
