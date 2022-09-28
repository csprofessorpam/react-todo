import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
  return (
    props.todos.map(todo =>{
      return <Todo key = {todo.id} todo={todo} toggleTodo = {props.toggleTodo}/>
    })
  )
}
