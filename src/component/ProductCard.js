import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="productCard" onClick={showDetail}>
      <img width="250em" src={item?.img} />
      <div>{item?.choice ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new ? "신제품" : ""}</div>
    </div>
  );
}

export default ProductCard;
