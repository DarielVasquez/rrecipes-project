import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";

const MealTypeRecipes = () => {
  const {
    recipes: { lowCalories, noSugar, wines },
    loading,
  } = useGlobalContext();
  const { id } = useParams();
  const recipesTitle = id.replace(/-/g, " ");
  const [recipeQuery, setRecipeQuery] = useState([]);

  const dishUrl =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=0d31116822b54414a5fe84f683d6d5d9&number=20&addRecipeInformation=true&type=";

  useEffect(() => {
    switch (id) {
      case "low-calorie-recipes":
        return setRecipeQuery([...lowCalories]);
      case "no-sugar-recipes":
        return setRecipeQuery([...noSugar]);
      case "recipes-using-wine":
        return setRecipeQuery([...wines]);
      default:
        return setRecipeQuery({});
    }
  }, []);

  console.log(recipeQuery);

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
              <h1>{recipesTitle}</h1>
            </div>
            <div className="recipes-grid">
              {recipeQuery.slice(0, 3).map((recipe, index) => {
                const { id, image, title, name } = recipe;
                return (
                  <div key={id} className={`box-item item-${index}`}>
                    <Link to={`/recipe/${id}`}>
                      <div className={`img-container-${index}`}>
                        <img src={image} alt={title || name} />
                      </div>
                      <div className="box-body">
                        <h3 className="title-dish">{title || name}</h3>
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
