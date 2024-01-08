import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/index.js';
import { router } from './routes/TodoRoutes.js';
import cors from 'cors';

dotenv.config({ path: './env' });
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())


connectDb().then(() => {
    try {
        // app.get('/', (req, res) => {
        //     res.send('My Home page');
        // })
        console.log("mongo connected");
        app.use(router)
        app.listen(PORT, () => {
            console.log(`Application is listeing on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error(error);
        throw error;
    }
}).catch((err) => {
    console.error(err);
})

