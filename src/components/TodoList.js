import React from 'react'
import Todo from './Todo'

function TodoList() {
    const todos =[
        {
            id : 1,
            name: "Spring boot"
        },
        {
            id : 2,
            name: "React"
        },
        {
            id : 3,
            name: "Golang"
        },
        
    ]

    const todoList = todos.map((todo)=> <Todo key={todo.id} todo={todo}></Todo>)
  return (
    <div>{todoList}</div>
  )
}

export default TodoList