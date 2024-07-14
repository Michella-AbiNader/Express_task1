const { Router } = require("express");

var todosList =[] //List to store the added todos
//Function to retrieve all todos details
function getTodos(){
    console.log(todosList); //Log to the terminal the list of todos
    return todosList; //returns the list of todos to show it to the user
}
//function to create a new todo
const createTodo =(req) =>{
    todosList.push(req.body) //Adds a new todo to the list of todos
    console.log("Todo created!"); //Logging message to indicate that a todo was created
}
//function to update an exixting todo
const updateTodo = (req) =>{
    console.log("Todo updated!");//Logging message to indicate that a todo was updated
}
//function to delete a todo
const deleteTodo = () =>{
    console.log("Todo deleted!");//Logging message to indicate that a todo was deleted
}

module.exports = { getTodos, createTodo, updateTodo, deleteTodo}