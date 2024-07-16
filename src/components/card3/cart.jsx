import CartItem from './cartItem';
import BillDetails from './billDetails';
import CancellationPolicy from './cancellationPolicy';
import './cart.css';

function Cart({ cartItems, billDetails }) {
  return (
    <div className="cart">
      <h2 className="cart-header">My Cart</h2>
      <div className="cart-content">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <BillDetails details={billDetails} />
        <CancellationPolicy />
      </div>
    </div>
  );
}

export default Cart;