import Button from '../button';
import './cartItem.css';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="delivery-time">
        <span>⏱ Delivery in {item.deliveryTime}</span>
        <span>Shipment of 1 item</span>
      </div>
      <div className="item-details">
        <img src={item.image} alt={item.name} className="item-image" />
        <div className="item-info">
          <h3>{item.name}</h3>
          <p>{item.weight}</p>
          <div className="item-pricing">
            <span className="current-price">₹{item.price}</span>
            <span className="old-price">₹{item.oldPrice}</span>
          </div>
        </div>
        <div className="item-quantity">
          <Button classes="quantity-button" buttonText="-"/>  
          <span>1</span>
          <Button classes="quantity-button" buttonText="+"/>  
        </div>
      </div>
    </div>
  );
}

export default CartItem;