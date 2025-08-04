const mongoose = require('mongoose');
const { DB_NAME } = require('../../constants.js');

const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected`);
        
    } catch (error) {
        console.log("Database connection failed",error);
        process.exit(1);
    }
}

module.exports = {connectDB};