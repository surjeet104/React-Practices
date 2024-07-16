import Button from "../button";
import "./card2.css";
// import Card from "./card";
import SearchBar from "./searchbar";
import ProductCard from "./productCard";

function Card2() {
  const products = [
    {
      id: 1,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLY77ZN-vH3xmgGhzFNlnF0KEvxHFB6AQnobDQEI1LshJMepg0gCJhdJgT0dxnRZb3fs4DnBh118jEZdj5CDKU2nCMkyJ3dNKRt_Kqd4yfct69FoVskrgl",
      discount: "15% OFF",
      time: "10 MINS",
      name: "Pillsbury Chakki Fresh Atta -10 Kg",
      weight: "10 kg",
      price: 399,
      oldPrice: 473,
    },
    {
      id: 2,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLY77ZN-vH3xmgGhzFNlnF0KEvxHFB6AQnobDQEI1LshJMepg0gCJhdJgT0dxnRZb3fs4DnBh118jEZdj5CDKU2nCMkyJ3dNKRt_Kqd4yfct69FoVskrgl",
      discount: "25% OFF",
      time: "10 MINS",
      name: "Whole Farm Chakki Atta",
      weight: "10 kg",
      price: 357,
      oldPrice: 480,
    },
    {
      id: 3,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLY77ZN-vH3xmgGhzFNlnF0KEvxHFB6AQnobDQEI1LshJMepg0gCJhdJgT0dxnRZb3fs4DnBh118jEZdj5CDKU2nCMkyJ3dNKRt_Kqd4yfct69FoVskrgl",
      discount: "39% OFF",
      time: "10 MINS",
      name: "Whole Farm Chakki Atta",
      weight: "5 kg",
      price: 175,
      oldPrice: 290,
    },
    {
      id: 4,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLY77ZN-vH3xmgGhzFNlnF0KEvxHFB6AQnobDQEI1LshJMepg0gCJhdJgT0dxnRZb3fs4DnBh118jEZdj5CDKU2nCMkyJ3dNKRt_Kqd4yfct69FoVskrgl",
      discount: "9% OFF",
      time: "10 MINS",
      name: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
      weight: "5 kg",
      price: 229,
      oldPrice: 240,
    },
    {
      id: 5,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLY77ZN-vH3xmgGhzFNlnF0KEvxHFB6AQnobDQEI1LshJMepg0gCJhdJgT0dxnRZb3fs4DnBh118jEZdj5CDKU2nCMkyJ3dNKRt_Kqd4yfct69FoVskrgl",
      discount: "9% OFF",
      time: "10 MINS",
      name: "Aashirvaad Shudh Chakki Whole Wheat Atta (10 kg)",
      weight: "10 kg",
      price: 415,
      oldPrice: 459,
    },
  ];
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="data:image/png;base64,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" alt="Logo" />
        </div>
        <SearchBar />
      </header>
      <div>
        <div className="filter-buttons">
          <button className="filter-button">aashirvaad atta</button>
          <button className="filter-button">atta maggi</button>
          <button className="filter-button">multigrain atta</button>
        </div>
      </div>
      <div className="product-list">
        <h2>Showing results for "atta"</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} props={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card2;
