import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import Score from "../components/Score";
import { MdOutlineTimer } from "react-icons/md";

const MealTypeRecipes = () => {
  const { meal } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipeQuery, setRecipeQuery] = useState([]);

  // const url =
  //   "https://api.spoonacular.com/recipes/complexSearch?apiKey=0d31116822b54414a5fe84f683d6d5d9&number=10&addRecipeInformation=true&&minCalories=0&maxCalories=25";

  const fetchRecipe = async () => {
    try {
      const responseRecipes = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=0d31116822b54414a5fe84f683d6d5d9&number=15&addRecipeInformation=true&type=${meal}`
      );
      const dataRecipes = await responseRecipes.json();
      const dataMealRecipes = dataRecipes.results;
      console.log(dataMealRecipes);
      if (dataRecipes.status === "failure") {
        console.log(dataRecipes.status);
        setRecipeQuery(dataMealRecipes);
        setLoading(false);
      } else {
        switch (meal) {
          case "main course":
          case "side dish":
          case "dessert":
          case "appetizer":
          case "salad":
          case "bread":
          case "breakfast":
          case "soup":
          case "beverage":
          case "sauce":
          case "marinade":
          case "fingerfood":
          case "snack":
          case "drink":
          case "antipasti":
          case "brunch":
          case "morning meal":
          case "dip":
          case "condiment":
          case "starter":
          case "hor d'oeuvre":
          case "miscellaneous":
            setRecipeQuery(dataMealRecipes);
            break;
          default:
            setRecipeQuery([]);
            break;
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
    return () => setRecipeQuery({});
  }, [meal]);

  console.log(meal);

  if (loading) {
    return <Loading />;
  } else if (recipeQuery === undefined || recipeQuery.length === 0) {
    return <div style={{ fontSize: "5em" }}>no recipes found</div>;
  } else {
    return (
      <main>
        <div className="recipe-container">
          <section className="multiple-recipes">
            <div className="recipes-title">
              <h1>{meal}</h1>
            </div>
            <div className="recipes-grid">
              {recipeQuery.slice(0, 3).map((recipe, index) => {
                const {
                  id,
                  image,
                  title,
                  spoonacularScore,
                  readyInMinutes,
                  summary,
                } = recipe;
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
                        <p
                          className="recipes-summary"
                          dangerouslySetInnerHTML={{
                            __html: summary,
                          }}
                        ></p>
                        <div className="timer">
                          <span>
                            <MdOutlineTimer />
                            {readyInMinutes}mins
                          </span>
                          <Score score={spoonacularScore} />
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
  }
};

export default MealTypeRecipes;
