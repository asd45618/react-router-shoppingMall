import React from "react";

function ProductCard({ item }) {
  return (
    <div>
      <img width="300em" src={item?.img} />
      <div>{item?.choice ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new ? "신제품" : ""}</div>
    </div>
  );
}

export default ProductCard;
