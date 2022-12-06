import { useState, useEffect } from "react";

import "./App.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import List from "./components/List";

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState();

  const heavyWork = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      const initData = response.data;
      callback(initData);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(`${e}`);
    }
  };

  useEffect(() => {
    heavyWork();
  }, []);

  return loading;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const getUrl = "http://localhost:3000/users";

  const loading = useFetch(setList, getUrl);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputEnter = (e) => {
    if (e.keycode === "68") console.log("enter");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setList((prevList) => {
      return [
        ...prevList,
        {
          id: uuidv4(),
          title: inputValue,
          completed: false,
        },
      ];
    });
    setInputValue("");
  };

  useEffect(() => {
    console.log("render이 돼부렸어");
  }, [list]);

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <p>할일:</p>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleInputEnter}
        />
        <button type="submit">제출</button>
      </form>
      <List todos={list} loading={loading}></List>
    </div>
  );
}

export default App;
