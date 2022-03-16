import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    // console.log(searchValue.current.value);
    setSearchTerm(searchValue.current.value);
    e.preventDefault();
  };

  return (
    <form role="search" className="search" onSubmit={handleSubmit}>
      <input
        id="search"
        type="search"
        placeholder="Search..."
        ref={searchValue}
        autoFocus
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
