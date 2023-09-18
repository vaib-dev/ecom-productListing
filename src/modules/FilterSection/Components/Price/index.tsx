import React, { useEffect, useState, useMemo } from "react";

import { useSeperatedData } from "hooks/seperateFilterData";
import { useFilter } from "Context/SelectedFilterContext";

const PriceCard = () => {
  const { price } = useSeperatedData();
  const { priceFilter, setPriceFilter }: any = useFilter();
  const memoizedPrice = useMemo(() => price, [price]);
  const [priceData, setPriceData] = useState<any>([]);
  const [minPrice, setMinValue] = useState("0");
  const [maxPrice, setMaxValue] = useState<any>("0");
  const [toggle, setToggle] = useState<any>(false);
  const [leftValue, setLeftValue] = useState(10);
  const [rightValue, setRightValue] = useState(251);

  useEffect(() => {
    if (price) {
      setPriceData(price);
    } else {
      setPriceData([]);
    }
  }, [memoizedPrice?.length]);

  useEffect(() => {
    if (priceData.length > 0) {
      const [minValue, maxValue] = priceData[0].values[0]?.value
        .split("_")
        .map(parseFloat);
      setMinValue(minValue);
      setMaxValue(maxValue);
    }
  }, [priceData]);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleRangeChange = (e: any) => {
    if (e.target.name === "right") setRightValue(e.target.value);
    if (e.target.name === "left") setLeftValue(e.target.value);
  };
  const productWithPrice = () => {
    const priceFilterValues = [leftValue, rightValue];
    setPriceFilter(priceFilterValues);
  };
  
  return (
    <div className="filter-container">
      {toggle ? (
        <>
          <div className="filter-text">
            Price
            <button className="toogle" onClick={() => handleToggle()}>
              -
            </button>
          </div>
          {priceData[0]?.values?.map((items: any) => {
            return (
              <>
                <div key={items.value} className="price-filter">
                  <input
                    type="range"
                    name="left"
                    min={0}
                    max={Math.floor(maxPrice / 2)}
                    step={10}
                    className="slider-input"
                    onChange={(e) => handleRangeChange(e)}
                  />

                  <input
                    type="range"
                    name="right"
                    min={251}
                    step={10}
                    max={maxPrice}
                    className="slider-input"
                    onChange={(e) => handleRangeChange(e)}
                  />
                </div>
                <div className="price-values">
                  <span className="price-value-box">$ {leftValue}</span>
                  <span style={{marginInline:"5px"}}> - </span>
                  <span className="price-value-box">$ {rightValue}</span>
                  <button className="price-btn" onClick={productWithPrice}>
                    Go
                  </button>
                </div>
              </>
            );
          })}
        </>
      ) : (
        <div className="filter-text">
          Price
          <button className="toogle" onClick={() => handleToggle()}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceCard;
