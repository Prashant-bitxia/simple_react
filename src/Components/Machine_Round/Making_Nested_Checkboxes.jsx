import React, { useState } from "react";

const checkboxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          {
            id: 3,
            name: "Orange",
          },
          {
            id: 4,
            name: "Lemon",
          },
          {
            id: 5,
            name: "Lime",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Berries",
    children: [
      {
        id: 7,
        name: "Strawberry",
      },
      {
        id: 8,
        name: "Blueberry",
      },
      {
        id: 9,
        name: "Raspberry",
      },
    ],
  },
  {
    id: 10,
    name: "Vegetables",
    children: [
      {
        id: 11,
        name: "Leafy Greens",
        children: [
          {
            id: 12,
            name: "Spinach",
          },
          {
            id: 13,
            name: "Lettuce",
          },
        ],
      },
      {
        id: 14,
        name: "Root Vegetables",
        children: [
          {
            id: 15,
            name: "Carrot",
          },
          {
            id: 16,
            name: "Potato",
          },
          {
            id: 17,
            name: "Beetroot",
          },
        ],
      },
    ],
  },
  {
    id: 18,
    name: "Electronics",
    children: [
      {
        id: 19,
        name: "Computers",
        children: [
          {
            id: 20,
            name: "Laptop",
          },
          {
            id: 21,
            name: "Desktop",
          },
        ],
      },
      {
        id: 22,
        name: "Phones",
        children: [
          {
            id: 23,
            name: "Android",
          },
          {
            id: 24,
            name: "iPhone",
          },
        ],
      },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  // const getAllIds = (node) => {
  //   let ids = [node.id];
  //   if (node.children) {
  //     for (const child of node.children) {
  //       ids = [...ids, ...getAllIds(child)];
  //     }
  //   }

  //   return ids;
  // };

  // const handleChange = (e, node) => {
  //   const isChecked = e.target.checked;

  //   setChecked((prev) => {
  //     const newCheckboxes = { ...prev };

  //     const ids = getAllIds(node);
  //     ids.forEach((id) => {
  //       newCheckboxes[id] = isChecked;
  //     });

  //     return newCheckboxes;
  //   });
  // };

  // =====< below is whole code and aobve this onluy the when parent is chek then child get chekced>==========

  const handleChange = (e, node) => {
    const isChecked = e.target.checked;

    setChecked((prev) => {
      const newCheckboxes = { ...prev };

      const updateCheckboxes = (node) => {
        newCheckboxes[node.id] = isChecked;
        node.children?.forEach((child) => {
          updateCheckboxes(child);
        });
      };

      const verifyChecked = (node) => {
        if (!node.children) return newCheckboxes[node.id] || false;

        const allChildrenChecked = node.children?.every((child) =>
          verifyChecked(child),
        );
        newCheckboxes[node.id] = allChildrenChecked;

        return allChildrenChecked;
      };

      updateCheckboxes(node);

      checkboxesData?.forEach((node) => {
        verifyChecked(node);
      });

      return newCheckboxes;
    });
  };

  console.log("Checked value ==> ", checked);

  return (
    <>
      <div>
        {data?.map((node) => (
          <div className="parent" style={{ paddingLeft: "2rem" }} key={node.id}>
            <input
              type="checkbox"
              name={node.name}
              id={node.id}
              checked={checked[node.id]}
              onChange={(e) => handleChange(e, node)}
            />
            <span>{node.name}</span>
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Making_Nested_Checkboxes = () => {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <Checkboxes
        data={checkboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default Making_Nested_Checkboxes;
