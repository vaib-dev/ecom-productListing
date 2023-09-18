import React from "react";
import MaterialCard from "./Components/Material";
import ColorCard from "./Components/Color";
import PriceCard from "./Components/Price";

const Filters = () => {
  return (
    <>
      <div className="filter-text h1">FILTERS</div>
      <hr style={{ border:"1px solid #EFEFEF" }} />
      <MaterialCard />
      <ColorCard />
      <PriceCard />
    </>
  );
};

export default Filters;
