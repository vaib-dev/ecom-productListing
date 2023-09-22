import React from "react";

const Sticker = ({
  comparedPrice,
  originalPrice,
}: any) => {
  const discountCalculated = Math.floor(
    ((comparedPrice - originalPrice) / comparedPrice) * 100
  );
  return (
    <div>
      <span className="right-badge">SALE</span>
      <span className="left-badge">{discountCalculated} % OFF</span>
    </div>
  );
};

export default Sticker;
