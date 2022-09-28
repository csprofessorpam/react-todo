import React from 'react'

export default function Todo(props) {

    function handleTodoClick(){
        props.toggleTodo(props.todo.id)
    }
  return (
    <div>
        <label>
            <input type="checkbox" checked={props.todo.complete} onChange={handleTodoClick}/>
            {props.todo.name}
        </label>
        
    </div>
  )
}
