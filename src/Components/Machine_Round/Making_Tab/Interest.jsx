import React from "react";

const Interest = ({ data, setData, errors }) => {
  const { interest } = data;

  const hobbies = [
    {
      name: "Swimming",
      value: "swimming",
    },
    {
      name: "Football",
      value: "football",
    },
  ];

  console.log("interest -> ", interest);

  const handleChange = (key, value, name) => {
    setData((prevState) => ({
      ...prevState,
      [key]: value
        ? [...prevState[key], name]
        : prevState[key].filter((item) => item !== name),
    }));
  };

  return (
    <div>
      <h1>Interest Component</h1>
      <div className="interest_container">
        <h3>Select your Interest</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {hobbies?.map((item, index) => (
            <>
              <label key={index}>
                <input
                  name={item.value}
                  type="checkbox"
                  checked={interest?.includes(item.value)}
                  onChange={(e) =>
                    handleChange("interest", e.target.checked, e.target.name)
                  }
                />
                {item.name}
              </label>
            </>
          ))}
        </div>
          {errors.interest && <span>{errors.interest}</span>}
      </div>
    </div>
  );
};

export default Interest;
