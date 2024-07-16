import React, { useState } from "react";
import "./ColorChanger.css";
import Button from "../button";

function ColorChanger() {
  const [style, setStyle] = useState({
    backgroundColor: "",
    color: "",
    border: `5px solid `,
  });

  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const changeBgColor = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: bgColor,
    }));
  };

  const changeTextColor = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      color: textColor,
    }));
  };

  const changeBorderColor = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      border: `5px solid ${borderColor}`,
    }));
  };
  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="BG-Color..."
          onChange={(event) => setBgColor(event.target.value)}
        />
        <Button buttonText="Change" handleClick={changeBgColor} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Text-Color..."
          onChange={(event) => setTextColor(event.target.value)}
        />
        <Button buttonText="Change" handleClick={changeTextColor} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Border-Color..."
          onChange={(event) => setBorderColor(event.target.value)}
        />
        <Button buttonText="Change" handleClick={changeBorderColor} />
      </div>
      <div className="box" style={style}> THIS IS A BOX</div>
    </div>
  );
}

export default ColorChanger;
