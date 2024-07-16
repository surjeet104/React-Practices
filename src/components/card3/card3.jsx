import Button from "../button";
import "./card3.css";
import Cart from "./cart";
import BillDetails from "./billDetails";
import CartItem from "./cartItem";

function Card3() {
  const cartItems = [
    {
      id: 1,
      image: "https://images.kglobalservices.com/www.krave.com/en_us/product/product_4508745/prod_img-3768373_prod_img-3768373.png",
      name: "Kellogg's Double Chocolaty Fills",
      weight: "250 g",
      price: 193,
      oldPrice: 205,
      deliveryTime: "9 minutes",
    },
  ];

  const billDetails = {
    itemsTotal: 193,
    saved: 12,
    deliveryCharge: 0,
    handlingCharge: 4,
    grandTotal: 197,
  };
  return (
    <div className="cards-container">
      <Cart cartItems={cartItems} billDetails={billDetails} />
    </div>
  );
}

export default Card3;
