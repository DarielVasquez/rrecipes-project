import React, { useState, useContext, useEffect, useCallback } from "react";

const url =
  "https://api.spoonacular.com/recipes/random?apiKey=0d31116822b54414a5fe84f683d6d5d9&number=13";
const lowCaloriesUrl =
  "https://api.spoonacular.com/recipes/findByNutrients?apiKey=0d31116822b54414a5fe84f683d6d5d9&minCalories=0&maxCalories=50";
// const url =
//   "https://api.spoonacular.com/recipes/complexSearch?apiKey=0d31116822b54414a5fe84f683d6d5d9";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (url) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  };

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      //Fetch Random Recipes
      const dataRandomRecipes = await fetchData(url);
      //Fetch Low Calorie Recipes
      const dataLowCalorieRecipes = await fetchData(lowCaloriesUrl);
      if (dataRandomRecipes.status === "failure") {
        console.log(dataRandomRecipes.status);
        setLoading(false);
      } else {
        const randomRecipes = dataRandomRecipes.recipes;
        setRecipes((prevRecipes) => {
          return {
            ...prevRecipes,
            random: randomRecipes,
            lowCalories: dataLowCalorieRecipes,
          };
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <AppContext.Provider value={{ recipes, loading, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
