import React, { useEffect, useState } from "react";
import "../../styles/making_autocomplete_searchbar.css";

const Making_AutoComplete_SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[inputValue]) {
      return setResults(cache[inputValue]);
    }

    const res = await fetch(
      `https://dummyjson.com/recipes/search?q=${inputValue}`,
    );
    const json = await res.json();
    console.log("Result --> ", res, json);
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [inputValue]: json?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Auto Complete Search Bar</h1>
        <input
          type="text"
          style={{ width: "25rem", padding: "0.25rem 0.5rem" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />
        {showResult && (
          <div
            className="result_container"
            style={{
              border: "2px solid black",
              width: "25rem",
              margin: "auto",
            }}
          >
            {results?.map((item) => (
              <span
                style={{
                  display: "block",
                  padding: "0.25rem 0.5rem",
                  textAlign: "left",
                }}
                className="result"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Making_AutoComplete_SearchBar;
