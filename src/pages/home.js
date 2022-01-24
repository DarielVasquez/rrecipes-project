import React from "react";
import { useGlobalContext } from "../context";

const Home = () => {
  const { recipes } = useGlobalContext();
  console.log(recipes);
  return (
    <main>
      <section className="section">
        <div className="appliances-center">
          <div className="wrapper">
            {recipes.map((recipe, index) => {
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
    </main>
  );
};

export default Home;
