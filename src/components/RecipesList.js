import React from "react";
import { Link } from "react-router-dom";

const RecipesList = ({ legend, recipes }) => {
  const link = legend.toLowerCase().replace(/ /g, "-");
  return (
    <section className="section-recipe-slider">
      <fieldset>
        <legend>{legend}</legend>
        <div className="slider">
          <div className="slides">
            {recipes.map((recipe) => {
              const { id, title, name, image, calories, sugar } = recipe;
              return (
                <div key={id} className="slide">
                  <img src={image} alt={title} style={{ width: "100%" }} />
                  <h3 className="title-dish">{title || name}</h3>
                  <div className="dish-data">
                    {calories && <div>Calories: {calories}</div>}
                    {sugar && <div>Sugar: {sugar}</div>}
                    <Link to={`/recipes/${link}`}>
                      <button>Get the Recipe &gt;</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default RecipesList;
