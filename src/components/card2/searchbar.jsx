import "./searchbar.css";
import Button from "../button";

function SearchBar() {
  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <Button buttonText="×" classes="clear-button" />
        <Button buttonText="Add to Cart" classes="add-btn" />
      </div>

      
    </div>
  );
}

export default SearchBar;
