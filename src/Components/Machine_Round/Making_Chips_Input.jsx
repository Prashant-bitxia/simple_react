import React, { useState } from "react";

const Making_Chips_Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setChips((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    console.log("Handle deltete");
    const copyChips = [...chips];

    copyChips.splice(index, 1);
    setChips(copyChips);
  };

  return (
    <div>
      <h1>chips Input</h1>
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
        value={inputValue}
      />
      {chips &&
        chips.map((chip, index) => (
          <div
           
            style={{
              height: "2rem",
              width: "fit-content",
              border: "2px solid black",
              display: "flex",
              gap: "2rem",
            }}
          >
            {chip}
            <button onClick={() => handleDelete(index)}>X</button>
          </div>
        ))}
    </div>
  );
};

export default Making_Chips_Input;
