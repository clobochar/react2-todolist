import { useState } from "react";
import "./App.css";
import { todos as data } from "./api/data";

function App() {
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");

  const handleSave = () => {
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
        <Button name="Save" handleClcik={handleSave} />
        <h2>{input}</h2>
      </div>
      <div className="list-container">
        <ul className="list">
          {todos.map((todo) => {
            return (
              <li key={`todo-${todo.id}`}>
                {todo.id}-{todo.title}
                <Button name="Delete" handleClcik={handleDelete} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
