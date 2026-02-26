import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading products...</p>;
  }
  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => navigate("/checkout")}>Go to checkout</button>
        <h2>Products</h2>
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>

              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
