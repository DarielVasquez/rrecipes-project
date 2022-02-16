import React from "react";
import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarBorder,
} from "react-icons/md";

const Score = ({ score }) => {
  return (
    <div>
      {score >= 95 && (
        <div>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
        </div>
      )}
      {score >= 85 && score < 95 && (
        <div>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarHalf />
        </div>
      )}
      {score >= 75 && score < 85 && (
        <div>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarBorder />
        </div>
      )}
      {score >= 65 && score < 75 && (
        <div>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarHalf />
          <MdOutlineStarBorder />
        </div>
      )}
      {score >= 55 && score < 65 && (
        <div>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </div>
      )}
      {score >= 45 && score < 55 && (
        <div>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarHalf />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </div>
      )}
      {score >= 35 && score < 45 && (
        <div>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </div>
      )}
      {score >= 25 && score < 35 && (
        <div>
          <MdOutlineStar />
          <MdOutlineStarHalf />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </div>
      )}
      {score >= 15 && score < 25 && (
        <div>
          <MdOutlineStar />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </div>
      )}
      {score >= 5 && score < 15 && (
        <div>
          <MdOutlineStarHalf />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </div>
      )}
      {score < 5 && (
        <div>
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </div>
      )}
    </div>
  );
};

export default Score;
