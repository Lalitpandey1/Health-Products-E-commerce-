import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
// import styled from "styled-components";

function Star({ stars }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;

    return (
      <span key={index} className="flex">
        {stars >= index + 1 ? (
          <FaStar size={13} color="#38CB89" className="icon" />
        ) : stars >= numbers ? (
          <FaStarHalfAlt size={13} color="#38CB89" className="icon" />
        ) : (
          <AiOutlineStar size={13} color="#38CB89" className="icon" />
        )}
      </span>
    );
  });

  return <div className="flex my-0.5">{ratingStar}</div>;
}

export default Star;
