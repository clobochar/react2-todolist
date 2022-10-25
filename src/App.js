import { useState } from "react";

import List from "./components/List";
import ListItem from "./components/ListItem";
import Button from "./components/Button";
import Input from "./components/Input";
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
        <Input
          value={input}
          handleChange={setInput}
          placeholder="enter your task.."
        />
        <Button name="Save" handleClick={handleSave} />
        <h2>{input}</h2>
      </div>
      <div className="list-container">
        <ul>
          {todos.map((todo, index) => {
            return (
              <ListItem key={`todo-${todo.id}`} todo={todo}>
                <Button name="get" handleClick={() => handleDelete(todo.id)} />
              </ListItem>
            );
          })}
        </ul>
        <Button name="delete" />
      </div>
    </div>
  );
}

export default App;
