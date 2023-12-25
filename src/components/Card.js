import React from "react";

const Card = ({ colors }) => {
  let styles = {
    background: `linear-gradient(${colors.colorOne}, ${colors.colorTwo})`,
  };

  return (
    <div className="card">
      <div className="cardDetails">
        <h1>
          {colors.colorOne} & {colors.colorTwo}
        </h1>
        <h3>{colors.number}</h3>
      </div>

      <div className="circle" style={styles}></div>
    </div>
  );
};

export default Card;
