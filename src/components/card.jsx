import { useState } from "react";
import "./index.css";

function Card() {
  const [ptext, setPText] = useState("Lorem ipsum dolor sit amet.");
  const [showDescription, setDescription] = useState(true);
  const [imgSrc, setSrc] = useState(
    "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg"
  );

  
  function handle() {
    setPText("Changed");
  }

  function hideCard() {
    setDescription(false);
  }

  function changeImage() {
    setSrc(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7wuivx9c99ORSNRc2Fy6trOHAhJOPNauNw&s"
    );
  }
  return (
    <div className="card">
      {<img className="img" src={imgSrc} />}
      <h3>heading</h3>
      {showDescription ? <p>{ptext}</p> : null}
      <button onClick={handle} className="btn">
        Click Me
      </button>
      <button onClick={hideCard}>Hide Description</button>
      <button onClick={changeImage}>change Image</button>
    </div>
  );
}

export default Card;
