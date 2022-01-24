import React, { useState, useContext, useEffect, useCallback } from "react";

const url =
  "https://api.spoonacular.com/recipes/random?apiKey=0d31116822b54414a5fe84f683d6d5d9&number=12";
// const url =
//   "https://api.spoonacular.com/recipes/complexSearch?apiKey=0d31116822b54414a5fe84f683d6d5d9";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const recipes = data.recipes;
      setRecipes(recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <AppContext.Provider value={{ recipes }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
