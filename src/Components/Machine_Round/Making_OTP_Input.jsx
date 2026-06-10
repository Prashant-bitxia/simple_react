import React, { useEffect, useRef, useState } from "react";

const OTP_Digit = 5;
const Making_OTP_Input = () => {
  const [inputValues, setinputValues] = useState(
    new Array(OTP_Digit).fill("0"),
  );
  const refArr = useRef([]);

  const handleChange = (value, index) => {
    const newValue = value?.trim();
    if (isNaN(newValue)) return;

    const newArr = [...inputValues];
    newArr[index] = newValue.slice(-1);

    setinputValues(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    console.log(e)
    const val = e.target.value;
    if (!val && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  return (
    <div>
      <p>Making OTP Input</p>

      {inputValues.map((value, index) => (
        <>
          <input
            style={{
              width: "3rem",
              height: "3rem",
              fontSize: "2.5rem",
              textAlign: "center",
              margin: "1rem",
            }}
            key={index}
            type="text"
            value={inputValues[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        </>
      ))}

      <p>Otp input</p>
    </div>
  );
};

export default Making_OTP_Input;
