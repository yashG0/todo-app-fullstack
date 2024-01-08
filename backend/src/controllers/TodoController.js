import { Todo } from '../models/Todo.model.js';

const getTodo = async (req,res) => {
    const todo = await Todo.find()
    res.send(todo)
}

const saveTodo = async (req,res) => {
    const {text} = req.body;
    Todo.create({text}).then((data)=>{
        console.log(data, " has been added succesfully");
        res.send(data)
    })
}

export {getTodo,saveTodo}