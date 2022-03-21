import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import NoRecipes from "../components/NoRecipes";
import { CgEditBlackPoint } from "react-icons/cg";
import { MdOutlineCheck, MdOutlineClose } from "react-icons/md";

const Recipe = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [steps, setSteps] = useState([]);

  const fetchRecipe = async () => {
    try {
      const responseRecipe = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=0d31116822b54414a5fe84f683d6d5d9`
      );
      const dataRecipe = await responseRecipe.json();

      const responseSteps = await fetch(
        `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=0d31116822b54414a5fe84f683d6d5d9`
      );
      const dataStepsExtended = await responseSteps.json();
      console.log(dataRecipe);
      console.log(dataStepsExtended);

      if (dataRecipe.status === "failure") {
        console.log(dataRecipe.status);
        setRecipe(dataRecipe);
        setSteps(dataStepsExtended);
        setLoading(false);
      } else {
        const dataSteps = dataStepsExtended[0].steps;
        setRecipe(dataRecipe);
        setSteps(dataSteps);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
    console.log(recipe);
  }, []);

  const {
    dishTypes,
    image,
    creditsText,
    glutenFree,
    dairyFree,
    vegan,
    vegetarian,
    veryHealthy,
    pricePerServing,
    readyInMinutes,
    servings,
    summary,
    instructions,
    title,
    sourceName,
    extendedIngredients,
  } = recipe;

  if (loading) {
    return <Loading />;
  } else if (recipe.status === "failure" || steps.status === "failure") {
    return <NoRecipes />;
  } else
    return (
      <main>
        <article className="recipe-container">
          <div className="single-recipe">
            <ul>
              <span>DISH TYPES: </span>
              {dishTypes.length === 0 ? (
                <Link to={`/meal/miscellaneous`}>Miscellaneous</Link>
              ) : (
                dishTypes.map((dish, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        display: "inline-block",
                      }}
                      className="single-recipe-dishes"
                    >
                      <Link to={`/meal/${dish}`} style={{ color: "white" }}>
                        {dish}
                      </Link>
                    </li>
                  );
                })
              )}
            </ul>
            <h1>{title}</h1>
            <h3>
              {sourceName} - {creditsText}
            </h3>
            <hr />
            <figure>
              <img
                src={image}
                alt={title}
                style={{ width: "100%" }}
                className="single-recipe-img"
              />
              <figcaption>Source: {sourceName}</figcaption>
            </figure>
            <div className="info-box">
              <span>Cost: ${pricePerServing}</span>
              <span>Time: {readyInMinutes} minutes</span>
              <span>Total Servings: {servings}</span>
            </div>
            <div className="single-recipe-body">
              <h3>Details</h3>
              <ul className="recipe-ul">
                <li>
                  Gluten Free:{" "}
                  {glutenFree ? <MdOutlineCheck /> : <MdOutlineClose />}
                </li>
                <li>
                  Dairy Free:{" "}
                  {dairyFree ? <MdOutlineCheck /> : <MdOutlineClose />}
                </li>
                <li>
                  Vegan: {vegan ? <MdOutlineCheck /> : <MdOutlineClose />}
                </li>
                <li>
                  Vegetarian:{" "}
                  {vegetarian ? <MdOutlineCheck /> : <MdOutlineClose />}
                </li>
                <li>
                  Healthy:{" "}
                  {veryHealthy ? <MdOutlineCheck /> : <MdOutlineClose />}
                </li>
              </ul>
              <h3>Summary </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: summary,
                }}
              ></p>
              <h3>Ingredients </h3>
              <ul className="recipe-ul">
                {extendedIngredients.map((ingredient, index) => {
                  const { id, original, image } = ingredient;
                  return (
                    <li key={index}>
                      <span>{original}</span>
                    </li>
                  );
                })}
              </ul>
              {/* <h3>Instructions </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: instructions,
                }}
              ></p> */}
              <h3>Steps </h3>
              {steps.map((instruction) => {
                const { number, step } = instruction;
                return (
                  <div key={number}>
                    <CgEditBlackPoint /> {step}
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </main>
    );
};

export default Recipe;
