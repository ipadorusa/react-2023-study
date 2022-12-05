import { useState, useEffect } from 'react'
import List from './components/List'
import './App.module.css'

function App() {
  const [inputVal, setInputVal] = useState([]);
  const [newTodo, setNewTodo] = useState();
  
  const inputChange = (e) => {
    setNewTodo(e.target.value);
  }

  const btnSubmit = (e) => {
    e.preventDefault();
    setInputVal([...inputVal, newTodo]);
    setInputVal('');
  }

  useEffect(() => {
    console.log('aaaaaaaaaaa');
  });

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form action="">
        <input type="text" value={newTodo} onChange={inputChange}/>
        <button type="submit" onClick={btnSubmit}>제출</button>
      </form>
      <List item={inputVal}></List>
    </div>
  )
}

export default App
