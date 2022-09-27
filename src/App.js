// import logo from './logo.svg';
// import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div>
       <TodoList />
       <input type="text"></input>
       <button>Add Todo</button>
       <button>Clear Complete</button>
       <div>0 left to do</div>
    </div>
  )
}

export default App;
