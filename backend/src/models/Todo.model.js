import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const todoSchema = new Schema({
    text:{
        type:String,
        required:true
    }
})


export const Todo = mongoose.model("Todo",todoSchema);