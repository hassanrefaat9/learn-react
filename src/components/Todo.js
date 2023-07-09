import React from 'react'

function Todo({ todo }) {
    return (
       <div>
        <input type="checkbox"/>
        <label>{todo.name}</label>
       </div>
    )
}

export default Todo