import React from "react";
import { useGlobalContext } from "../context";

const Home = () => {
  const { recipes } = useGlobalContext();
  console.log(recipes);
  return (
    <main>
      <section className="section">
        <div className="appliances-center">home</div>
      </section>
    </main>
  );
};

export default Home;
