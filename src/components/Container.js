import React, { useState } from "react";
import Card from "./Card";

const Container = ({ colors, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="switch">
        <h1
          style={{
            transform: `rotate(${open ? "90deg" : "0deg"})`,
          }}
          onClick={() => setOpen(!open)}
        >
          >
        </h1>
      </div>

      {open ? (
        <>
          <Card
            colors={{
              colorOne: colors.colorOne,
              colorTwo: colors.colorTwo,
              number: 1,
            }}
          />

          <Card
            colors={{
              colorOne: colors.colorThree,
              colorTwo: colors.colorFour,
              number: 2,
            }}
          />

          <Card
            colors={{
              colorOne: colors.colorFive,
              colorTwo: colors.colorSix,
              number: 3,
            }}
          />
        </>
      ) : (
        <h1 className="text" style={{ fontSize: `${open ? "10px" : "20px"}` }}>
          {colors.text}
        </h1>
      )}
    </div>
  );
};

export default Container;
