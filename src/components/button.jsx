import "./index.css";

function Button(props){
   const {buttonText,handleClick,classes}=props;
   return (
    <button className={classes? classes:"btn"} onClick={handleClick}>{buttonText}</button>
   )
}

export default Button;