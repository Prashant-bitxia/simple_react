import React, { useState } from "react";
import json from "../../Helper/data.json";

const List = ({ list }) => {
  const [isExpand, setIsExpand] = useState({});

  return (
    <div>
      {list?.map((node, index) => (
        <div
          style={{
            textAlign: "left",
            paddingLeft: "1rem",
            margin: "1rem",
          }}
          key={node.id}
        >
          <div
            style={{
              border: node.isFolder ? "2px solid black" : "none",
              maxWidth: "fit-content",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsExpand((prev) => ({
                ...prev,
                [node.name]: !prev[node.name],
              }));
            }}
          >
            {node.isFolder && <span>{isExpand?.[node.name] ? "▼" : "▶"}</span>}
            <span style={{}}>
              {!node.isFolder ? ` - ` : ""} {node.name}
            </span>
          </div>
          {isExpand?.[node.name] && <List list={node.children} />}
        </div>
      ))}
    </div>
  );
};

const Making_File_Explorer = () => {
  const [data, setData] = useState(json);

  return (
    <div>
      <h1>Making File Exploerer</h1>
      <List list={data} />
    </div>
  );
};

export default Making_File_Explorer;
