import dotenv from "dotenv"
import express, { Router, json } from 'express';
import cors from 'cors';
import { connectDB } from './src/DB/index.js';
import router from "./src/routes/home.route.js";
dotenv.config({
    path: './.env'
})

connectDB();

const app = express();
app.use(cors());
app.use(express.json())
app.use("/", router);

// router.use('/', require('./src/routes/home.route.js'));

app.listen(process.env.PORT, () => 
    console.log(`Server running on port ${process.env.PORT}`)
);
