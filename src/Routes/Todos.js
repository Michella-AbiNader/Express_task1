const express = require('express');
const router = express.Router();
const Todos = require("../Services/TodosService");
const tryCatch = require("../Services/Utils/TryCatch");
const {validateTodos} = require('../Services/Utils/Validator');

//Get /todos endpoint with tryCatch missleware to handle errors
router.get(
    "/todos", 
    tryCatch((request, response)=>{
    const json = Todos.getTodos();
    var result = {todos: json}
    return response.status(200).json(result);
}
));

router.get(
    "/todos/:id", 
    tryCatch((request, response)=>{
         const todo = Todos.getTodoById(request.params.id);
        if(!todo){
            return response.status(404).json({message: "todo not found"})
        }
        return response.status(200).json(todo);
}
));

//Post /todos endpoint with tryCatch missleware to handle errors
router.post("/todos", validateTodos, tryCatch((request, response)=>{
    Todos.createTodo(request.body);
    return response.status(200).json({message: "Todo created!"});
}
));

//Put /todos endpoint with tryCatch missleware to handle errors
router.put("/todos/:id", validateTodos, tryCatch((request, response)=>{
    const id =request.params.id;
    const updated = Todos.updateTodo(id, request.body)
    if(!updated){
        return response.status(400).json({message: "todo not found"})
    }
    return response.status(200).json({message: "todo updated"})
}
));

//Delete /todos endpoint with tryCatch missleware to handle errors
router.delete("/todos/:id", tryCatch((req, res)=>{
    const updated = Todos.deleteTodo(req.params.id)
    if(!updated){
        return res.status(400).json({message: "Todo not found"})
    }
    return res.status(204).json({message: "Todo deleted"})
}
));


module.exports = router;  //Export the router module