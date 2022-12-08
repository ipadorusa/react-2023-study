import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import List from "./components/List";
import useFetch from "./components/useFetch";
import Header from "./components/Header";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const getUrl = "http://localhost:3000/users";

  const loading = useFetch(setList, getUrl);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputEnter = (e) => {
    if (e.keycode === "68") onFormSubmit();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setList((prevList) => {
      return [
        ...prevList,
        {
          id: uuidv4(),
          title: inputValue,
          status: "todo",
        },
      ];
    });
    setInputValue("");
  };

  const changeTodosStatus = (id) => {
    const updateTodos = list.map((todo) => {
      if (todo.id === id) {
        console.log(todo.status);
        if (todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    });
    setList(updateTodos);
  };

  useEffect(() => {
    console.log("render");
  }, [list]);

  return (
    <div className="App">
      <Header todos={list}></Header>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleInputEnter}
        />
        <button type="submit">제출</button>
      </form>
      <List
        todos={list}
        loading={loading}
        changeTodosStatus={changeTodosStatus}
      ></List>
    </div>
  );
}

export default App;
