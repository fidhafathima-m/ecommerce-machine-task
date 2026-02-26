import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => navigate("/home")}>Go to Home</button>
        <h2>Checkout</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.title} - {item.price} x {item.quantity}
          </div>
        ))}
        <h3>Total: {total.toFixed(2)}</h3>
      </div>
    </>
  );
};

export default Checkout;
