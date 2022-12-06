import { useState, useEffect } from "react";

import "./App.css";
import { v4 as uuidv4 } from "uuid";


const heavyWork = async() => {
  console.log('엄청무거워')
  const response = await fetch('http://localhost:3000/users');
  const initalData = await response.json();
  console.log('initalData', initalData)
}

const heavyWork2 = () => {
  return (
    [
      {id:1, title: 'alice', completed: false},
      {id:2, title: 'bek', completed: false},
      {id:3, title: 'chris', completed: false},
    ]
  )
}

function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState(() => {
    return heavyWork2();
  });


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputEnter = (e) => {
    if(e.keycode === '68') console.log('enter')
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setList((prevList) => {
      return [...prevList, {
        id: uuidv4(),
        title: inputValue,
        completed: false,
      },];
    })
    setInputValue('');
  }

  console.log('list', list)
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <p>할일:</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} onKeyUp={handleInputEnter}/>
        <button type="submit">제출</button>
      </form>
      <ul>
        {list !== null && list.map((item) => (<li key={item.id}>{item.title}</li>))}
      </ul>
    </div>
  );
}

export default App;
