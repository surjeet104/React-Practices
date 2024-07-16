import Button from "../button";
import "./card.css"
function CustomCard(props) {
  const {imgSrc,headingText,descriptionText} = props;
  return (
    <div className="card">
      {<img className="img" src={imgSrc} />}
      <h2>{headingText}</h2>
      <p>{descriptionText}</p>
      <Button buttonText="Continue"/>
    </div>
  );
}

export default CustomCard;
