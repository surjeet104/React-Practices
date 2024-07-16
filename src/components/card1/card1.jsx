import Button from "../button";
import "./card1.css";
import Card from "./card";

function Card1() {
  return (
    <div className="cards-container">
      <header className="cards-header">
        <img src="https://via.placeholder.com/50" alt="Logo" className="logo" />
        <div className="header-content">
          <h1>Elevate Your Interview Readiness</h1>
          <p>with 250+ interview asked questions from different companies.</p>
        </div>
        <div className="navigation-buttons">
          <Button buttonText="&#8592;" classes="nav-button" />
          <Button buttonText="&#8594;" classes="nav-button" />
        </div>
      </header>
      <div className="cards">
        <Card title="HTML CSS" topics="Topics - Bootstrap, Semantic HTML, Base Tags, Selectors, Styling,
          Layout..."/>
        <Card title="React/Redux" topics="Topics - Class based components, Working with APIs(React), Redux Introduction..."/>
        <Card title="JavaScript" topics="Topics - JS Basics, JS Advanced, JS Prototypes, JS array, Execution..."/>
      </div>
    </div>
  );
}

export default Card1;
