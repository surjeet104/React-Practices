import Button from "../button";

function Card(props) {
    const {title,topics}=props
  return (
    <div className="card">
      <div className="image-cont">
        <img
          src="https://via.placeholder.com/120"
          alt=""
          className="card-image"
        />
        <Button buttonText="0% Done" classes="completed-btn" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-topics">
          {topics}
        </p>

        <div className="company-logos">
          <p className="card-asked">Asked in</p>
          <img src="https://via.placeholder.com/30" alt="Company 1" />
          <img src="https://via.placeholder.com/30" alt="Company 2" />
        </div>
        <Button buttonText="Practice Now &#8594;" classes="practice-button" />
      </div>
    </div>
  );
}

export default Card;
