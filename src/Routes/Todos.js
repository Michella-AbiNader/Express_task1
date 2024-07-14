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
    return response.status(200).json(json);
}
));

//Post /todos endpoint with tryCatch missleware to handle errors
router.post("/todos", validateTodos, tryCatch((request, response)=>{
    Todos.createTodo(request);
    return response.status(200).json({message: "Todo created!"});
}
));

//Put /todos endpoint with tryCatch missleware to handle errors
router.put("/todos", validateTodos, tryCatch((request, response)=>{
    Todos.updateTodo(request);
    return response.status(200).json({message: "Todo Updated!"});
}
));

//Delete /todos endpoint with tryCatch missleware to handle errors
router.delete("/todos", tryCatch((request, response)=>{
    Todos.deleteTodo()
    return response.status(200).json({message: "Todo deleted!"});
}
));


module.exports = router;  //Export the router module