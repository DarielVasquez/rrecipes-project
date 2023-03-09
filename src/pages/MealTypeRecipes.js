import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import Score from "../components/Score";
import NoRecipes from "../components/NoRecipes";
import { MdOutlineTimer } from "react-icons/md";
import preset from "../images/Cheese-Tortellini-011.jpg";

const MealTypeRecipes = () => {
  const { meal } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipeQuery, setRecipeQuery] = useState([]);
  // const url =
  //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&addRecipeInformation=true&&minCalories=0&maxCalories=25`;

  const fetchRecipe = async () => {
    try {
      const responseRecipes = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=15&addRecipeInformation=true&type=${meal}`
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
          case "lunch":
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
  }, [meal]);

  console.log(meal);

  if (loading) {
    return <Loading />;
  } else if (recipeQuery === undefined || recipeQuery.length === 0) {
    return <NoRecipes />;
  } else {
    return (
      <main>
        <div className="recipe-container">
          <section className="multiple-recipes">
            <div className="recipes-title">
              <h1>{meal}</h1>
            </div>
            <div className="recipes-grid-container">
              <div className="recipes-grid">
                {recipeQuery.slice(0, 3).map((recipe, index) => {
                  const {
                    id,
                    image,
                    title,
                    spoonacularScore,
                    readyInMinutes,
                    summary,
                    dishTypes,
                  } = recipe;
                  return (
                    <div key={id} className="box-item">
                      <Link to={`/recipe/${id}`}>
                        <div className="img-container">
                          <img src={image} alt={title} />
                        </div>
                        <div className="box-body">
                          <div className="box-wrapper-dish">
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
                      <div className="dish-types-container-grid">
                        <div className="box-wrapper">
                          <div className="dish-types">
                            {dishTypes.length === 0 ? (
                              <Link to={`/meal/miscellaneous`}>
                                Miscellaneous
                              </Link>
                            ) : (
                              dishTypes.slice(0, 3).map((dish, index) => {
                                return (
                                  <div
                                    key={index}
                                    // style={{
                                    //   display: "inline-block",
                                    // }}
                                  >
                                    {index ? ", " : ""}
                                    <Link to={`/meal/${dish}`}>{dish}</Link>
                                  </div>
                                );
                              })
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="recipes-grid-container">
              <div className="recipes-grid">
                {recipeQuery.slice(3).map((recipe, index) => {
                  const {
                    id,
                    image,
                    title,
                    spoonacularScore,
                    readyInMinutes,
                    summary,
                    dishTypes,
                  } = recipe;
                  return (
                    <div key={id} className="box">
                      <Link to={`/recipe/${id}`}>
                        <img
                          className="img"
                          src={image || preset}
                          alt={title}
                          style={{ width: "100%" }}
                        />
                        <div className="box-container">
                          <div className="box-wrapper">
                            <h3 className="title-dish">{title}</h3>
                          </div>
                          <div className="timer">
                            <span>
                              <MdOutlineTimer />
                              {readyInMinutes}mins
                            </span>
                            <Score score={spoonacularScore} />
                          </div>
                        </div>
                      </Link>
                      <div className="dish-types-container">
                        <div className="box-wrapper">
                          <div className="dish-types">
                            {dishTypes.length === 0 ? (
                              <Link to={`/meal/miscellaneous`}>
                                Miscellaneous
                              </Link>
                            ) : (
                              dishTypes.slice(0, 3).map((dish, index) => {
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      display: "inline-block",
                                    }}
                                  >
                                    {index ? ", " : ""}
                                    <Link to={`/meal/${dish}`}>{dish}</Link>
                                  </div>
                                );
                              })
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
};

export default MealTypeRecipes;
