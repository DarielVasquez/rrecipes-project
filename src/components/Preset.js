import React from "react";
import preset from "../images/Cheese-Tortellini-011.jpg";
import { Link } from "react-router-dom";
import Score from "./Score";
import { MdOutlineTimer } from "react-icons/md";

const Preset = () => {
  return (
    <div className="box">
      <Link to={`/`}>
        <img
          className="img"
          src={preset}
          alt="Cheese Tortellini in Creamy Marinara"
          style={{ width: "100%" }}
        />
        <div className="box-container">
          <div className="box-wrapper">
            <h3 className="title-dish">Cheese Tortellini in Creamy Marinara</h3>
          </div>
          <div className="timer">
            <span>
              <MdOutlineTimer />
              10mins
            </span>
            <Score score="100" />
          </div>
        </div>
      </Link>
      <div className="dish-types-container">
        <div className="box-wrapper">
          <div className="dish-types">
            <Link to={`/meal/miscellaneous`}>Miscellaneous</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preset;
