import React from "react";

const Price = ({ newPrice, oldPrice }: any) => {
  return (
    <>
      {newPrice!==null ? (
        <div className="price">
          <span className="org">${newPrice}</span>
          <span> ${oldPrice}</span>
        </div>
      ) : (
        <div className="price">
          <span> ${oldPrice}</span>
        </div>
      )}
    </>
  );
};

export default Price;
