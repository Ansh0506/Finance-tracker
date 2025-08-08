require('dotenv').config({path: './.env'});
const express = require('express');
const cors = require('cors');
const {connectDB} = require('./src/DB/index.js')
const router = express.Router();


connectDB();

const app = express();
app.use(cors());
app.use(express.json());

router.use('/', require('./src/routes/home.route.js'));

app.listen(process.env.PORT, () => 
    console.log(`Server running on port ${process.env.PORT}`)
);
