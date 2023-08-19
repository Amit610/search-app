import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "./Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free";
// import Heart from "./heart1.svg";

const Product = ({ name }) => {
  const [hovered, setHovered] = useState(false);
  const [wishlistClicked, setWishlistClicked] = useState(false);
  const productImage = faker.image.fashion(); // Generate a placeholder image URL
  const [bgColor, setBgColor] = useState(" ");
  const [wishlist, setWishlist] = useState([]);

  const handleWishlistClick = () => {
    setWishlistClicked(!wishlistClicked);
    // Change the background color to red when heart icon is clicked
    setBgColor(wishlistClicked ? " " : "red");

    if (!wishlistClicked) {
      setWishlist([...wishlist, name]);
    } else {
      setWishlist(wishlist.filter((item) => item !== name));
    }
  };

  return (
    <div
      className={`product ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={productImage} alt={name} />
      <FontAwesomeIcon
        icon={faHeart}
        className={`heart-icon ${wishlistClicked ? "red" : ""}`}
        onClick={handleWishlistClick}
        style={{ color: bgColor, width: "30px", height: "25px" }}
      />

      {/* <image src={Heart} className={`${wishlistClicked ? "red" : ""}`} /> */}

      {hovered && <button className="view-button">View Product</button>}
    </div>
  );
};

export default Product;
