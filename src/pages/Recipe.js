import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";

const Recipe = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  const fetchRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=0d31116822b54414a5fe84f683d6d5d9`
      );
      const data = await response.json();
      console.log(data);

      if (data.status === "failure") {
        console.log(data.status);
        setLoading(false);
      } else {
        setRecipe(data);
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

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
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
            <ul>
              {extendedIngredients.map((ingredient) => {
                const { id, original } = ingredient;
                return (
                  <li key={id}>
                    <span>{original}</span>
                  </li>
                );
              })}
            </ul>
            <br />
            <h3>Details: </h3>
            <div>Gluten Free: {glutenFree ? "Yes" : "No"}</div>
            <div>Dairy Free: {dairyFree ? "Yes" : "No"}</div>
            <div>Vegan: {vegan ? "Yes" : "No"}</div>
            <div>Vegetarian: {vegetarian ? "Yes" : "No"}</div>
            <div>Healthy: {veryHealthy ? "Yes" : "No"}</div>
            <br />
            <h3>Instructions: </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: instructions,
              }}
            ></p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Recipe;
