import "./productCard.css";

function ProductCard({ props }) {
  const { discount, image, name, time, weight, price, oldPrice } = props;
  return (
    <div className="product-card">
      <div className="discount">{discount}</div>
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <p className="delivery-time">⏱ {time}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-weight">{weight}</p>
        <div className="product-pricing">
          <div>
            <span className="new-price">₹{price}</span>
            <span className="old-price">₹{oldPrice}</span>
          </div>
          <Button buttonText="ADD" classes="add-button" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
