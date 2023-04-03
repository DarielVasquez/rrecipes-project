import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">About</h1>
        <p className="about-text">
          Recipes is a React-based web application that provides users with a
          wide variety of delicious recipes from around the world. The
          application is designed to help users discover new recipes, save their
          favorites, and organize their cooking adventures.
        </p>
        <br />
        <h2 className="about-subtitle">Technologies Used</h2>
        <p className="about-text">
          The project is built using React.js, and utilizes a number of popular
          libraries and frameworks, including:
          <ul>
            <li className="about-li">
              React.js for building the user interface and managing state.
            </li>
            <li className="about-li">
              React Router for handling navigation and routing.
            </li>
            <li className="about-li">Context API for state management.</li>
          </ul>
          The data for the application is sourced from{" "}
          <Link to={"https://spoonacular.com/food-api"}>spoonacular api</Link>,
          which provides a comprehensive database of recipes from around the
          world.
        </p>
        <br />
        <h2 className="about-subtitle">Features</h2>
        <p className="about-text">
          Recipes includes a range of features to help users make the most of
          the application, including:
          <ul>
            <li className="about-li">
              <strong>Search functionality: </strong>Users can search for
              recipes by keyword, ingredient, or cuisine type.
            </li>
            <li className="about-li">
              <strong>Recipe view: </strong>Each recipe includes detailed
              information about ingredients, preparation, and cooking time.
            </li>
          </ul>
        </p>
        <br />
        <h2 className="about-subtitle">Future Development</h2>
        <p className="about-text">
          In the future, I plan to add additional features to Recipes,
          including:
          <ul>
            <li className="about-li">
              <strong>User accounts: </strong>Users will be able to create
              accounts to save their recipes and preferences.
            </li>
            <li className="about-li">
              <strong>Social sharing: </strong>Users will be able to share their
              favorite recipes on social media platforms.
            </li>
          </ul>
        </p>
        <br />
        <h2 className="about-subtitle">Credits</h2>
        <p className="about-text">
          The project was created by Dariel Vasquez, as a portfolio project to
          demonstrate proficiency in React development. The project would not
          have been possible without the generous support of the open source
          community, including the creators of React.js, React Router, and
          Spoonacular api.
        </p>
      </div>
    </section>
  );
};

export default About;
