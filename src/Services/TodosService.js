const { Router } = require("express");
const db = require('better-sqlite3')('app.db');

//Function to retrieve all todos details
function getTodos(){
    const query = "SELECT * FROM todos;"
      const result = db.prepare(query).all()
    return result; //returns the list of todos to show it to the user
}

function getTodoById(todoId){
    const query = "SELECT * FROM todos WHERE id = ?;"
    const result = db.prepare(query).get(todoId) 
    return result; //returns the list of todos to show it to the user
}

//function to create a new todo
const createTodo =(todo) =>{
    const query =`INSERT INTO todos (todo, isCompleted) VALUES (?,?)`
    const result = db.prepare(query).run(todo.todo, todo.isCompleted)
    if(result.changes === 0){
       throw new Error("An error occured when  inserting a product in the database")
   }
}
//function to update an exixting todo
const updateTodo = (todoId, todo) =>{
const query = `UPDATE todos SET todo = ?, isCompleted = ? WHERE id = ?`;
   const result = db.prepare(query).run(todo.todo, todo.isCompleted, todoId);
    if(result.changes === 0){
       return false
    }
    return true}
//function to delete a todo
const deleteTodo = (todoId) =>{
const query = `DELETE FROM todos WHERE id = ?`;
    const result = db.prepare(query).run(todoId);
    if(result.changes ===0){
        return false
    }
    return true
}

module.exports = { getTodos, getTodoById, createTodo, updateTodo, deleteTodo}