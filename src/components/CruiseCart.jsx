import React from "react";
import "../style/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function CruiseCart({
  visibilty,
  cruises,
  onCruiseRemove,
  onClose,
  onQuantityChange,
}) {
  return (
    <div
      className="modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>Cruise Booking Cart</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-cruises">
          {cruises.length === 0 && (
            <span className="empty-text">Your cart is currently empty</span>
          )}
          {cruises.map((cruise) => (
            <div className="cart-cruise" key={cruise.id}>
              <img src={cruise.image} alt={cruise.name} />
              <div className="cruise-info">
                <h3>{cruise.name}</h3>
                <span className="cruise-price">
                  {cruise.price * cruise.count}$
                </span>
              </div>
              <select
                className="count"
                value={cruise.count}
                onChange={(event) => {
                  onQuantityChange(cruise.id, event.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                className="btn remove-btn"
                onClick={() => onCruiseRemove(cruise)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          {cruises.length > 0 && (
            <button className="btn checkout-btn">Proceed to checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CruiseCart;