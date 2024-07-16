import './billDetails.css';

function BillDetails({ details }) {
  return (
    <div className="bill-details">
      <h3>Bill details</h3>
      <div className="bill-item">
        <span>Items total</span>
        <span className="saved">Saved ₹{details.saved}</span>
        <span>₹{details.itemsTotal}</span>
      </div>
      <div className="bill-item">
        <span>Delivery charge</span>
        <span className="free">FREE</span>
        <span>₹{details.deliveryCharge}</span>
      </div>
      <div className="bill-item">
        <span>Handling charge</span>
        <span>₹{details.handlingCharge}</span>
      </div>
      <div className="bill-item grand-total">
        <span>Grand total</span>
        <span>₹{details.grandTotal}</span>
      </div>
    </div>
  );
}

export default BillDetails;