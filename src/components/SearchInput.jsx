import React, { useRef, useState } from "react";
import search from "../assets/search.png";

export default function SearchInput({ onClick }) {
  const [location, setLocation] = useState("");
  const inputRef = useRef();

  function handleChangeLocation() {
    const text = inputRef.current.value;
    setLocation(text);
  }

  return (
    <div className="search-input-container">
      <input
        className="search-input-div"
        placeholder="e.g Cairo"
        ref={inputRef}
        onChange={handleChangeLocation}
      />
      <button onClick={() => onClick(location)}>
        <img className="search-icon-2" src={search} alt="Search Icon" />
      </button>
    </div>
  );
}
