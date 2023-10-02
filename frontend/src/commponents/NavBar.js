import React from "react";
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className={Styles.navBar}>
      <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
        <h2>OnlineShop</h2>
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to={"/cart"}>
        <div className={Styles.navBag}>
          <FontAwesomeIcon className={Styles.bagIcon} icon={faBagShopping} />
          <span className={Styles.bagQuantity}>
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
