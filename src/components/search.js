import React from "react";

export default function search({ query, search, handleQueryChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => handleQueryChange(e.target.value)}
        value={query}
        onKeyPress={search}
      ></input>
    </div>
  );
}
