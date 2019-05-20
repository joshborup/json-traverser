import React, { useEffect, useState } from "react";

export default function Instructions({
  angle,
  instructions,
  image,
  width,
  instKey
}) {
  const [store, setStore] = useState(localStorage.getItem(instKey));
  useEffect(() => {
    console.log(store);
    if (!store) {
      localStorage.setItem(instKey, "true");
    }
  }, [store]);

  return store === "true" ? (
    ""
  ) : (
    <div
      style={{ transform: `rotate(${angle || 0}deg)`, overflow: "hidden" }}
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
          margin: "35px"
        }}
      >
        {instructions}
      </div>
    </div>
  );
}
