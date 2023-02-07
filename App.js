import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [arr , setTodoArr] = useState([]);
  const [room , setTodoroom] = useState("");

  function Add (){
    arr.push(room)
    console.log(arr)
    setTodoArr([...arr])
    setTodoroom("");
  }
  function DeleteAll(){
    setTodoArr([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={e => {
          setTodoroom(e.target.value)
        }} 
        value={room}
        placeholder='Enter'>
        </input>
        <ol>
        {arr.map((f , g) => {
          function del(){
            let remove = arr.filter(one => one !== f)
            setTodoArr(remove)
            console.log(remove)
          }
          return (
            <li key={g}>{f} <button onClick={del}>X</button></li>
          )
        })}
        </ol>
        <button onClick={Add}>Add</button>
        <button onClick={DeleteAll}>Delete All</button>
      </header>
    </div>
  );
}

export default App;
