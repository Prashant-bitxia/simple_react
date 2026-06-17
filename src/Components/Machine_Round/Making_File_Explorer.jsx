import React, { useState } from "react";
import json from "../../Helper/data.json";

const List = ({ list, handleAdd, handleDelete }) => {
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
              maxWidth: "fit-content",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsExpand((prev) => ({
                ...prev,
                [node.name]: !prev[node.name],
                // [node.id]: !prev[node.id],
              }));
            }}
          >
            {node.isFolder && <span>{isExpand?.[node.name] ? "▼" : "▶"}</span>}
            <span>
              {!node.isFolder ? "📄" : "📁"} {node.name}
            </span>

            {/*------------> Add Button <-------------*/}
            {node.isFolder && (
              <button
                onClick={() => handleAdd(node.id)}
                style={{ marginLeft: "10px", cursor: "pointer" }}
              >
                ➕
              </button>
            )}

            {/*-------------> Delete Button <------------- */}
            <button
              onClick={() => handleDelete(node.id)}
              style={{ marginLeft: "5px" }}
            >
              ❌
            </button>
          </div>
          {isExpand?.[node.name] && (
            <List
              list={node.children}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const Making_File_Explorer = () => {
  const [data, setData] = useState(json);

  // Delete Node
  const deleteNode = (tree, nodeId) => {
    return tree
      .filter((node) => node.id !== nodeId)
      .map((node) => ({
        ...node,
        children: node.children ? deleteNode(node.children, nodeId) : [],
      }));
  };

  const handleAdd = (folderId) => {
    const newNodeName = prompt("Enter a name");
    if (!newNodeName) return;

    const isFolderCreate =
      prompt("Is Folder? (true/false)")?.toLowerCase() === "true";

    const newNode = {
      id: Date.now().toString(),
      name: newNodeName,
      isFolder: isFolderCreate,
      children: isFolderCreate ? [] : undefined,
    };

    const updatedList = (list) => {
      return list?.map((node) => {
        if (node.id === folderId) {
          return { ...node, children: [...node.children, newNode] };
        }

        //  if children is there then check for children kya pata vo add children mai karna cha raha ho
        // agar parent ki id match nahi hoti to
        if (node.children) {
          return { ...node, children: updatedList(node.children) };
        }
        return node;
      });
    };

    setData((prev) => updatedList(prev));
  };

  const handleDelete = (itemId) => {
    const updatedList = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return {
              ...node,
              children: updatedList(node.children),
            };
          }
          return node;
        });
    };

    setData((prev) => updatedList(prev));
  };

  return (
    <div>
      <h1>Making File Exploerer</h1>
      <List list={data} handleAdd={handleAdd} handleDelete={handleDelete} />
    </div>
  );
};

export default Making_File_Explorer;
