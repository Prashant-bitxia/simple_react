import React, { useState } from "react";

const Making_TodoList = () => {
  const [inputValue, setInputValue] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    const obj = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodoList((prev) => [...prev, obj]);
    setInputValue("");
  };

  const handleToggle = (id) => {
    console.log(id);

    const updatedList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodoList(updatedList);
  };

  const handleDelete = (id) => {
    console.log(id);

    const updateList = todoList.filter((item) => item.id !== id);
    setTodoList(updateList);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <input
          type="text"
          placeholder="Enter todo"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {todoList.length > 0 ? (
          <ul>
            {todoList.map((item) => (
              <li
                key={item.id}
                style={{ display: "flex", gap: "2rem", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    handleToggle(item.id);
                  }}
                />
                <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
                <button
                  style={{ height: "2rem", width: "4rem" }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p> Todo List is empty </p>
        )}
      </div>
    </div>
  );
};

export default Making_TodoList;
