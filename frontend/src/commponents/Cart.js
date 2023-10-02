import React, { useEffect } from "react";
import Styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={Styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className={Styles.cartEmpty}>
          <p>Your cart is currently empty</p>
          <div className={Styles.startShopping}>
            <Link to={"/"}>
              <FontAwesomeIcon
                className={Styles.iconArrow}
                icon={faArrowLeft}
              />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className={Styles.titles}>
            <h3 className={Styles.productTittle}>Product</h3>
            <h3 className={Styles.price}>Price</h3>
            <h3 className={Styles.Quantity}>Quantity</h3>
            <h3 className={Styles.total}>Total</h3>
          </div>
          <div className={Styles.cartItems}>
            {cart.cartItems?.map((cartItem) => (
              <div key={cartItem.id} className={Styles.cartItem}>
                <div className={Styles.cartProduct}>
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.desc}</p>
                    <button
                      onClick={() => handleRemoveFromCart(cartItem)}
                      className={Styles.cartBtn}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className={Styles.cartProductPrice}>${cartItem.price}</div>
                <div className={Styles.cartProductQuantity}>
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className={Styles.count}>{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    +
                  </button>
                </div>
                <div className={Styles.cartProductTotalPrice}>
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className={Styles.cartSummary}>
            <button
              onClick={() => handleClearCart()}
              className={Styles.clearCart}
            >
              Clear Cart
            </button>
            <div className={Styles.cartCheckout}>
              <div className={Styles.subtotal}>
                <span>subtotal</span>
                <span className={Styles.amount}>${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className={Styles.continueShopping}>
                <Link to={"/"}>
                  <FontAwesomeIcon
                    className={Styles.iconArrow}
                    icon={faArrowLeft}
                  />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
