import { useState } from "react";
import "./index.css";

function Background() {
  const [images, setImages] = useState([
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/luffy-is-grinning-in-the-movie.jpg?q=50&fit=crop&w=1100&h=550&dpr=1.5",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/portgas-d-ace-one-piece.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    "https://staticg.sportskeeda.com/editor/2024/06/7a1e9-17181301094426-1920.jpg",
  ]);

  const [img, setImage] = useState(images[0]);
  const [count, setCount] = useState(0);
  function changeImage() {
    let updateCount = count + 1;
    if (updateCount < images.length) {
      setCount(updateCount);
    } else {
      setCount(0);
    }
    setImage(images[count]);
  }
  return (
    <div className="bg-cont">
      {<img onClick={changeImage} src={img} alt="" />}
    </div>
  );
}

export default Background;
