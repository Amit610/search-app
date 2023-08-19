import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./SearchTab.scss";
import Product from "./Product";
import Wishlist from "./Wishlist";

const SearchTab = () => {
  const [trendSuggestions, setTrendSuggestions] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const suggestions = Array.from({ length: 8 }, () => faker.random.word());
    setTrendSuggestions(suggestions);
  }, []);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredSuggestions = trendSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(filterText.toLowerCase())
  );
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className="search-tab">
      <input
        type="text"
        placeholder="Filter trends"
        value={filterText}
        onChange={handleFilterChange}
        style={{
          width: "300px",
          height: "30px",
          borderRadius: "20px",
          backgroundColorz: "venila",
          paddingLeft: "20px",
        }}
      />
      <div className="trend-suggestions">
        {filteredSuggestions.map((suggestion, index) => (
          <Product key={index} name={suggestion} />
        ))}
        <Wishlist wishlist={wishlist} />
      </div>
    </div>
  );
};

export default SearchTab;
