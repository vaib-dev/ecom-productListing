import React from "react";
import { useFilter } from "Context/SelectedFilterContext";

const Breadcrumbs = () => {
  const {
    materialFilter,
    colorFilter,
    setMaterialFilter,
    setColorFilter,
    priceFilter,
    setPriceFilter,
  }: any = useFilter();

  const handleRemoveFilter = (e: any, item: any) => {
    if (e.target.name === "material") {
      const removeMaterialFilter = materialFilter?.filter(
        (value: any) => value !== item
      );
      setMaterialFilter(removeMaterialFilter);
    }
    if (e.target.name === "color") {
      const removeColorFilter = colorFilter?.filter(
        (value: any) => value !== item
      );
      setColorFilter(removeColorFilter);
    }
    if (e.target.name === "price") {
      setPriceFilter((priceFilter.length = 0));
    }
  };
  const renderPriceFilter = () => {
    const minPrice = parseInt(priceFilter[0]);
    const maxPrice = parseInt(priceFilter[1]);
    return (
      <div>
        ${minPrice} - ${maxPrice}
        <button
          className="cancel-button"
          name="price"
          onClick={(e) => handleRemoveFilter(e, priceFilter)}
        >
          X
        </button>
      </div>
    );
  };
  return (
    <div className="selected-filter">
      {priceFilter?.length > 0 && <> {renderPriceFilter()}/</>}
      {colorFilter?.length > 0 &&
        colorFilter?.map((item: any) => {
          return (
            <>
              <div
                className="circle-filter"
                style={{ backgroundColor: `${item}` }}
              ></div>
              <button
                className="cancel-button"
                name="color"
                onClick={(e) => handleRemoveFilter(e, item)}
              >
                X
              </button>
            </>
          );
        })}
      {colorFilter?.length > 0 && "/"}
      {materialFilter?.length > 0 &&
        materialFilter?.map((item: any) => {
          return (
            <span className="breadcrumbs-text">
              {item}
              <button
                name="material"
                className="cancel-button"
                onClick={(e) => handleRemoveFilter(e, item)}
              >
                X
              </button>
            </span>
          );
        })}
    </div>
  );
};

export default Breadcrumbs;
