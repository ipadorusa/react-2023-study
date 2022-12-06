import { useState, useEffect } from "react";
import List from "./components/List";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {

  console.log('✍')
  const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleKeyEnter = (e) => {
    if(e.key === '68') onFormSubmit();
  }
  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: input,
        completed: false,
      },
    ]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <p>할일: {todos.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={input || ""} onChange={onInputChange} onKeyUp={handleKeyEnter}/>
        <button type="submit">제출</button>
      </form>
      {todos != "" && <List todos={todos} setTodos={setTodos}></List>}
    </div>
  );
}

export default App;
