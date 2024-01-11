import { Todo } from '../models/Todo.model.js';

const getTodo = async (req, res) => {
    const todo = await Todo.find()
    res.send(todo)
}

const saveTodo = async (req, res) => {
    const { text } = req.body;
    Todo.create({ text }).then((data) => {
        console.log(data, " has been added succesfully");
        res.send(data)
    })
}

const updateTodo = async (req, res) => {
    const { _id, text } = req.body;
    Todo.findByIdAndUpdate(_id, { text }).then(() => {
        res.send("Updated Successfully");
    }).catch((err) => {
        console.error(err)
    })
}

const deleteTodo = async (req, res) => {
    const { _id } = req.body;
    Todo.findByIdAndDelete(_id).then(() => {
        res.send("Deleted Successfully");
    }).catch((err) => {
        console.error(err)
    })
}

export { getTodo, saveTodo, updateTodo, deleteTodo }