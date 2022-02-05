import React from "react";

const RecipesList = ({ legend, recipes }) => {
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
                    <button onClick={() => console.log("xd")}>
                      Get the Recipe &gt;
                    </button>
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
