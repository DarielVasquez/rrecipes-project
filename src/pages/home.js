import React from "react";
import { useGlobalContext } from "../context";
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
            random.slice(0, 1).map((recipe, index) => {
              const { id, image, title, dishTypes } = recipe;
              return (
                <div key={id}>
                  <img src={image} alt={title} />
                  <div className="center-text-recipe">{title}</div>
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
              random.slice(1).map((recipe, index) => {
                const { id, image, title, dishTypes } = recipe;
                return (
                  <div key={id} className="box">
                    <img
                      className="img"
                      src={image}
                      alt={title}
                      style={{ width: "100%" }}
                    />
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
      <section className="section-recipe-slider">
        <fieldset>
          <legend>Low Calorie Recipes</legend>
          <div className="slider">
            <div className="slides">
              {lowCalories.map((recipe) => {
                const { id, title, image, calories } = recipe;
                return (
                  <div key={id} className="slide">
                    <img src={image} alt={title} style={{ width: "100%" }} />
                    <h3 className="title-dish">{title}</h3>
                    <span>Calories: {calories}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </fieldset>
      </section>
      <section className="section-recipe-slider">
        <fieldset>
          <legend>No Sugar Recipes</legend>
          <div className="slider">
            <div className="slides">
              {noSugar.map((recipe) => {
                const { id, title, image, sugar } = recipe;
                return (
                  <div key={id} className="slide">
                    <img src={image} alt={title} style={{ width: "100%" }} />
                    <h3 className="title-dish">{title}</h3>
                    <span>Sugar: {sugar}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </fieldset>
      </section>
      <section className="section-recipe-slider">
        <fieldset>
          <legend>Recipes Using Wine</legend>
          <div className="slider">
            <div className="slides">
              {wines.map((recipe) => {
                const { id, name, image } = recipe;
                return (
                  <div key={id} className="slide">
                    <img src={image} alt={name} style={{ width: "100%" }} />
                    <h3 className="title-dish">{name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </fieldset>
      </section>
      <div className="" style={{ height: "1000px" }}></div>
    </main>
  );
};

export default Home;
