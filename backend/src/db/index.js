import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}`)
        console.log(`\n Mongodb connected || DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDb connection Failed ", error);
        process.exit(1);
    }
}

export default connectDb;