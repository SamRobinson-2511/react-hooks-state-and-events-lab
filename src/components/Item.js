import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  



  const handleAddClick = () => setInCart(!inCart)
  
  return (
    <li className={inCart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove":"add"} onClick={handleAddClick}>
      {inCart ? "Remove from cart" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;
