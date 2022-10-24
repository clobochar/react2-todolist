import { useState } from "react";
import "./App.css";
import { todos as data } from "./api/data";

function App() {
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setTodos((prev) => {
      const count = prev.length + 1;
      return [...prev, { title: input, id: count }];
    });
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="App">
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="enter your task.."
        />
        <button onClick={handleClick}>Save</button>
        <h2>{input}</h2>
      </div>
      <div className="list-container">
        <Button name="test" style={{ color: "purple" }} />
        <ul className="list">
          {todos.map((todo) => {
            return (
              <li key={`todo-${todo.id}`}>
                {todo.id}-{todo.title}
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Button({ name, style }) {
  return <button style={Object.assign({}, style)}>{name}</button>;
}

export default App;
