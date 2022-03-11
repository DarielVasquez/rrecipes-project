import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";

const MealTypeRecipes = () => {
  const { meal } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipeQuery, setRecipeQuery] = useState([]);

  const url =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=0d31116822b54414a5fe84f683d6d5d9&number=10&addRecipeInformation=true&&minCalories=0&maxCalories=25";

  const fetchRecipe = async () => {
    try {
      const responseRecipes = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=0d31116822b54414a5fe84f683d6d5d9&number=20&addRecipeInformation=true&type=${meal}`
      );
      const dataRecipes = await responseRecipes.json();
      const dataMealRecipes = dataRecipes.results;
      console.log(dataMealRecipes);
      if (dataRecipes.status === "failure") {
        console.log(dataRecipes.status);
        setRecipeQuery(dataMealRecipes);
        setLoading(false);
      } else {
        setRecipeQuery(dataMealRecipes);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  console.log(meal);

  if (recipeQuery === undefined || recipeQuery.length === 0) {
    return <div style={{ fontSize: "5em" }}>no recipes found</div>;
  } else if (loading) {
    return <Loading />;
  } else
    return (
      <main>
        <div className="recipe-container">
          <section className="multiple-recipes">
            <div>
              <h1>{meal}</h1>
            </div>
            <div className="recipes-grid">
              {recipeQuery.slice(0, 3).map((recipe, index) => {
                const { id, image, title } = recipe;
                return (
                  <div key={id} className={`box-item item-${index}`}>
                    <Link to={`/recipe/${id}`}>
                      <div className={`img-container-${index}`}>
                        <img src={image} alt={title} />
                      </div>
                      <div className={`box-body-${index}`}>
                        <div className="box-wrapper">
                          <h3 className="title-dish">{title}</h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    );
};

export default MealTypeRecipes;
