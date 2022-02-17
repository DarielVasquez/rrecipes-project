import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import { CgEditBlackPoint } from "react-icons/cg";

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
      const dataSteps = dataStepsExtended[0].steps;
      console.log(dataRecipe);
      console.log(dataSteps);

      if (dataRecipe.status === "failure" || dataSteps.status === "failure") {
        console.log(dataRecipe.status);
        setRecipe(dataRecipe);
        setSteps(dataSteps);
        setLoading(false);
      } else {
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

  if (recipe.status === "failure") {
    return <div style={{ fontSize: "5em" }}>no recipe found</div>;
  } else if (loading) {
    return <Loading />;
  } else
    return (
      <main>
        <article className="recipe-container">
          <div className="single-recipe">
            <ul>
              <span>DISH TYPES: </span>
              {dishTypes.length === 0
                ? "Miscellaneous"
                : dishTypes.map((dish, index) => {
                    return (
                      <li
                        key={index}
                        style={{
                          display: "inline-block",
                        }}
                        className="single-recipe-dishes"
                      >
                        {dish}
                      </li>
                    );
                  })}
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
            <span>${pricePerServing}</span>
            <br />
            <span>{readyInMinutes} minutes</span>
            <br />
            <span>Total Servings: {servings}</span>
            <div className="single-recipe-body">
              <h3>Summary: </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: summary,
                }}
              ></p>
              <br />
              <h3>Ingredients: </h3>
              <ul className="recipe-ul">
                {extendedIngredients.map((ingredient, index) => {
                  const { id, original } = ingredient;
                  return (
                    <li key={index}>
                      <span>{original}</span>
                    </li>
                  );
                })}
              </ul>
              <br />
              <h3>Details: </h3>
              <ul className="recipe-ul">
                <li>Gluten Free: {glutenFree ? "Yes" : "No"}</li>
                <li>Dairy Free: {dairyFree ? "Yes" : "No"}</li>
                <li>Vegan: {vegan ? "Yes" : "No"}</li>
                <li>Vegetarian: {vegetarian ? "Yes" : "No"}</li>
                <li>Healthy: {veryHealthy ? "Yes" : "No"}</li>
              </ul>
              <br />
              <h3>Instructions: </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: instructions,
                }}
              ></p>
              <br />
              <h3>Steps: </h3>
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
