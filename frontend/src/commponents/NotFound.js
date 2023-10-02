import React from "react";
import Styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={Styles.notFound}>
      <h2>404</h2>
      <p>Page not Found</p>
    </div>
  );
};

export default NotFound;
