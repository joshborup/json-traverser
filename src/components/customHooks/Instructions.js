import React from "react";

export default function Instructions({ angle, instructions, image, width }) {
  return (
    <div
      style={{ transform: `rotate(${angle || 0}deg)` }}
      className="instructions"
    >
      <img
        style={{
          transform: `rotate(${angle || 0}deg)`,
          width: width || "75px"
        }}
        src={image}
      />
      <div
        style={{
          color: "#111111",
          transform: `rotate(-${angle || 0}deg)`,
          margin: "20px"
        }}
      >
        {instructions}
      </div>
    </div>
  );
}
