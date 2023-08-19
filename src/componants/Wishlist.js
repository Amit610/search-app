import React from "react";
import "./Wishlist.scss";

const Wishlist = ({ wishlist }) => {
  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      <ul>
        {wishlist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
