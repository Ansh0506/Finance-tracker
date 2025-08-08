import mongoose from 'mongoose';


const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connected`);
        
    } catch (error) {
        console.log("Database connection failed",error);
        process.exit(1);
    }
}

export {connectDB}