import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import preset from "../images/Cheese-Tortellini-011.jpg";
import Preset from "../components/Preset";
import RecipesList from "../components/RecipesList";
import Score from "../components/Score";
import { MdOutlineTimer } from "react-icons/md";

const Home = () => {
  const {
    recipes: { random, lowCalories, noSugar, wines },
    loading,
  } = useGlobalContext();
  const presetArray = Array(12).fill("");

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
          {random && random.length !== 0 ? (
            random.slice(0, 1).map((recipe) => {
              const { id, image, title, dishTypes, instructions } = recipe;
              return (
                <div key={id} className="main-recipe-container">
                  <img src={image || preset} alt={title} />
                  <div className="center-text-recipe">
                    <fieldset>
                      <legend className="dish-types">
                        {dishTypes.length === 0 ? (
                          <Link to={`/meal/miscellaneous`}>Miscellaneous</Link>
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
                      </legend>
                      <Link to={`/recipe/${id}`}>
                        <h2>{title}</h2>
                      </Link>
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
                <fieldset>
                  <legend className="dish-types">
                    <a>Miscellaneous</a>
                  </legend>
                  <h2>Cheese Tortellini in Creamy Marinara</h2>
                  <p className="main-instructions">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, soluta. Placeat, aut reiciendis saepe nisi deserunt
                    et, dolorem repellendus vero non, repudiandae impedit. Eius
                    rem officia nihil aliquid, dolore eveniet!
                  </p>
                  <Link to={`/`}>
                    <button>Get the full instructions &gt;</button>
                  </Link>
                </fieldset>
              </div>
            </div>
          )}
        </section>
        <section className="section-recipes">
          <div className="wrapper">
            {random && random.length !== 0
              ? random.slice(1).map((recipe) => {
                  const {
                    id,
                    image,
                    title,
                    dishTypes,
                    readyInMinutes,
                    spoonacularScore,
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
                })
              : presetArray.map((preset, index) => {
                  return <Preset key={index} />;
                })}
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
