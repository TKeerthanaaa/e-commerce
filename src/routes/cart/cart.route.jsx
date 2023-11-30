import React from "react";
import "./cart.style.scss";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {/* <ul>
        {cartItems.map((items) => (
          <li>
            <img src={imageUrl} />
            <div className="item-details">
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Cart;
