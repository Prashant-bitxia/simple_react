import React, { useEffect, useState } from "react";

const ProgressBar = ({ value }) => {
  const [prgress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(value);
    }, value * 10);
  }, [value]);

  return (
    <div style={{ display: "flex" , gap:"1rem" , alignItems:"center" }}>
      <div
        className="outer"
        style={{
          margin: "0.5rem 0",
          border: "1px solid black",
          borderRadius: "1rem",
          overflow: "hidden",
          width: "50%",
          height:"1rem"
        }}
      >
        <div
          className="inner"
          style={{
            backgroundColor: "lightgreen",
            fontWeight: "bold",
            // width: `${value}%`,
            transform: `translateX(${prgress - 100}%)`,
            transition: "0.5s ease-in",
            textAlign: "right",
            padding: "0.1rem 0.2rem",
            height:"100%"
          }}
        ></div>
      </div>
      <p>{value}%</p>
    </div>
  );
};

const Making_Progressbar = () => {
  const bar = [1, 5, 15, 50, 75, 100];

  return (
    <div>
      <h1>Progress Bar</h1>
      <div>
        {bar?.map((val) => (
          <ProgressBar value={val} />
        ))}
      </div>
    </div>
  );
};

export default Making_Progressbar;
