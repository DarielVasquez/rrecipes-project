import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchValue = useRef("");
  const clickValue = useRef("");
  const queryUrl =
    "https://api.spoonacular.com/recipes/autocomplete?apiKey=0d31116822b54414a5fe84f683d6d5d9&number=6&query=";

  const fetchQuery = useCallback(async () => {
    setShowResults(false);
    try {
      //Fetch Queries
      const response = await fetch(queryUrl + searchTerm);
      const data = await response.json();
      if (data.status === "failure") {
        console.log(data.status);
      } else {
        console.log(data);
        setQuery(data);
        if (data.length !== 0) {
          setShowResults(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchQuery();
    searchValue.current.focus();
    function handleClickOutside(event) {
      if (clickValue.current && !clickValue.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    const handleClickInside = (event) => {
      if (clickValue.current && clickValue.current.contains(event.target)) {
        if (query.length !== 0) setShowResults(true);
        else setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickInside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickInside);
    };
  }, [searchTerm, fetchQuery]);

  const handleSubmit = (e) => {
    setSearchTerm(searchValue.current.value);

    e.preventDefault();
    console.log(showResults);
  };

  return (
    <form
      role="search"
      className="search"
      onSubmit={handleSubmit}
      ref={clickValue}
    >
      <input
        id="search"
        type="search"
        placeholder="Search..."
        ref={searchValue}
        autoFocus
      />
      <button>Search</button>
      <div
        className={
          showResults ? "search-results show-results" : "search-results"
        }
      >
        {query.map((recipe, index) => {
          const { id, title } = recipe;
          return (
            <div key={id} className="search-card">
              <Link to={`/recipe/${id}`}>
                <img
                  className="search-img"
                  src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`}
                  alt={title}
                />
                <h3>{title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default SearchForm;
