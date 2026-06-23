import React from "react";

const Setting = ({ data, setData }) => {
  const { theme } = data;

  const handleChange = (key, value) => {
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div>
      <h1>Setting Component</h1>
      <div>
        <h3>Please select your Theme</h3>
        <label>
          <input
            name="dark"
            type="radio"
            checked={theme === "dark"}
            onChange={(e) => handleChange("theme", e.target.name)}
          />
          Dark
        </label>
        <label>
          <input
            name="light"
            type="radio"
            checked={theme === "light"}
            onChange={(e) => handleChange("theme", e.target.name)}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Setting;
