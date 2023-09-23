import { useState } from "react";
import { useFilter } from "Context/SelectedFilterContext";

const RangeTypeCard = ({ data, filterName }: any) => {
  const { setPriceFilter }: any = useFilter();
  const [priceData, setPriceData] = useState<any>(data);
  const [toggle, setToggle] = useState<any>(false);
  const [leftValue, setLeftValue] = useState(10);
  const [rightValue, setRightValue] = useState(251);

  const [minValue, maxValue] = priceData[0]?.value.split("_").map(parseFloat);

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
      <div className="filter-text">
        {filterName}
        <button className="toogle" onClick={() => handleToggle()}>
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && (
        <>
          {priceData?.map((items: any) => {
            return (
              <>
                <div key={items.value} className="price-filter">
                  <input
                    type="range"
                    name="left"
                    min={minValue}
                    max={Math.floor(maxValue / 2)}
                    step={10}
                    className="slider-input"
                    onChange={(e) => handleRangeChange(e)}
                  />

                  <input
                    type="range"
                    name="right"
                    min={251}
                    step={10}
                    max={maxValue}
                    className="slider-input"
                    onChange={(e) => handleRangeChange(e)}
                  />
                </div>
                <div className="price-values">
                  <span className="price-value-box">$ {leftValue}</span>
                  <span style={{ marginInline: "5px" }}> - </span>
                  <span className="price-value-box">$ {rightValue}</span>
                  <button className="price-btn" onClick={productWithPrice}>
                    Go
                  </button>
                </div>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default RangeTypeCard;
