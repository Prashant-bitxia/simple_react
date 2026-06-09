import React, { useState } from "react";

const Making_Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const items = [
    {
      title: "Title 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      description: "Description 2",
    },
    {
      title: "Title 3",
      description: "Description 3",
    },
    {
      title: "Title 4",
      description: "Description 4",
    },
  ];

  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (items.length === 0) {
    return <p> No Items available </p>;
  }

  return (
    <div>
      {items.map((item, index) => (
        <div>
          <button onClick={() => handleOpen(index)}>{item.title}</button>
          {openIndex === index && <div>{item.description}</div>}
        </div>
      ))}
    </div>
  );
};

export default Making_Accordian;
