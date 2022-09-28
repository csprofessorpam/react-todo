// import logo from './logo.svg';
// import './App.css';
import TodoList from './TodoList';
//need useState hook
import React, {useState, useRef, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'; //note change from video!


const LOCAL_STORAGE_KEY = 'todoApp.todos'


function App() {
  //create state
  //destructure the array it returns
  const [todos, setTodos] = useState([])

  const todoNameRef = useRef()


  //need to load from local storage first
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(storedTodos);
    if (storedTodos) setTodos(storedTodos)
  }, [])  //call when array is empty, when page loads

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))

  }, [todos])
  //anytime todos change, call useEffect function
  //localstorage won't work with StrictMode on

  function toggleTodo(id){
    const newTodos = [...todos]  //make a copy first
    //find the one with matching id to toggle
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;
    //make sure there is something to add
    if (name === '') return;
    console.log(name);
    //clear the textbox
    todoNameRef.current.value = "";
    //add new todo
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    //change the state
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)

  }
  
  return (
    <div>
       <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
       <input ref={todoNameRef} type="text"></input>
       <button onClick={handleAddTodo}>Add Todo</button>
       <button onClick = {handleClearTodos}>Clear Complete</button>
       <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
  )
}

export default App;
