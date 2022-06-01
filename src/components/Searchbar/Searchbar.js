import React, { useEffect, useState } from "react";
import "./Searchbar.css";

const Searchbar = ({ term, setTerm }) => {
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  const inputHandling = (e) => {
    const { value } = e.target;
    setDebouncedTerm(value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTerm(debouncedTerm);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [debouncedTerm]);

  return (
    <div className="searchbar container">
      <label className="mb-2" htmlFor="searchbar">
        Search Videos
      </label>
      <input
        className="form-control"
        placeholder="Search..."
        value={debouncedTerm}
        id="searchbar"
        type="text"
        onChange={inputHandling}
      />
    </div>
  );
};

export default Searchbar;
