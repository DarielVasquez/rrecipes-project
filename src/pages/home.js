import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import preset from "../images/Cheese-Tortellini-011.jpg";
import Preset from "../components/Preset";
import RecipesList from "../components/RecipesList";

const Home = () => {
  const {
    recipes: { random, lowCalories, noSugar, wines },
    loading,
  } = useGlobalContext();

  console.log(random);
  console.log(lowCalories);
  console.log(noSugar);
  console.log(wines);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <main>
      <div className="container">
        <section className="section-main-recipe">
          {random.length !== 0 ? (
            random.slice(0, 1).map((recipe) => {
              const { id, image, title, dishTypes, instructions } = recipe;
              return (
                <div key={id}>
                  <img src={image} alt={title} />
                  <div className="center-text-recipe">
                    <fieldset>
                      <legend className="dish-types">
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
                      </legend>
                      <h2>{title}</h2>
                      <p
                        className="main-instructions"
                        dangerouslySetInnerHTML={{
                          __html: instructions,
                        }}
                      ></p>
                      <Link to={`/recipe/${id}`}>
                        <button>Get the full instructions &gt;</button>
                      </Link>
                    </fieldset>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <img src={preset} alt="Cheese Tortellini in Creamy Marinara" />
              <div className="center-text-recipe">
                Cheese Tortellini in Creamy Marinara
              </div>
            </div>
          )}
        </section>
        <section className="section-recipes">
          <div className="wrapper">
            {random.length !== 0 ? (
              random.slice(1).map((recipe) => {
                const { id, image, title, dishTypes, readyInMinutes } = recipe;
                return (
                  <div key={id} className="box">
                    <Link to={`/recipe/${id}`}>
                      <img
                        className="img"
                        src={image}
                        alt={title}
                        style={{ width: "100%" }}
                      />
                      <div className="box-container">
                        <div className="dish-types">
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
                        <h3 className="title-dish">{title}</h3>
                        <span>{readyInMinutes}min</span>
                      </div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <>
                <Preset />
                <Preset />
                <Preset />
                <Preset />
                <Preset />
                <Preset />
                <Preset />
                <Preset />
                <Preset />
                <Preset />
                <Preset />
                <Preset />
              </>
            )}
          </div>
        </section>
      </div>
      <RecipesList legend="Low Calorie Recipes" recipes={lowCalories} />
      <RecipesList legend="No Sugar Recipes" recipes={noSugar} />
      <RecipesList legend="Recipes Using Wine" recipes={wines} />
    </main>
  );
};

export default Home;
