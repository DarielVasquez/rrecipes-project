import React from "react";
import { useGlobalContext } from "../context";

const Home = () => {
  const { recipes, loading } = useGlobalContext();
  console.log(recipes);
  console.log(loading);

  if (loading) {
    return (
      <div>
        loading...
        <img
          src="https://spoonacular.com/recipeImages/660322-556x370.png"
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    );
  }
  return (
    <main>
      <div className="container">
        <section className="section-main-recipe">
          {recipes.slice(0, 1).map((recipe, index) => {
            const { id, image, title, dishTypes } = recipe;
            return (
              <div key={id}>
                <img src={image} alt="" />
              </div>
            );
          })}
        </section>
        <section className="section-recipes">
          <div className="recipes-main">
            <div className="wrapper">
              {recipes.slice(1, 14).map((recipe, index) => {
                const { id, image, title, dishTypes } = recipe;
                return (
                  <div key={id} className="box">
                    <img
                      className="img"
                      src={image}
                      alt={title}
                      style={{ width: "100%" }}
                    />
                    <div className="dish">
                      {dishTypes.length === 0
                        ? "Miscellaneous"
                        : dishTypes.slice(0, 3).map((dish, index) => {
                            return (
                              <div
                                key={index}
                                style={{
                                  display: "inline-block",
                                }}
                              >
                                {(index ? ", " : "") + dish}
                              </div>
                            );
                          })}
                    </div>
                    <h2>{title}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
