import React from "react";
import { useGetAllProductsQuery } from "../features/productsAPi";
import Styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className={Styles.container}>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className={Styles.products}>
            {data &&
              data?.map((product) => (
                <div key={product.id} className={Styles.product}>
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className={Styles.details}>
                    <span>{product.desc}</span>
                    <span className={Styles.price}>${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
