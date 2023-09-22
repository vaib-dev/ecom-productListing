import React, { useEffect, useState } from "react";
import { useSeperatedData } from "hooks/seperateFilterData";
import axios from "axios";
import { useFilter } from "Context/SelectedFilterContext";

const ColorCard = () => {
  const { color } = useSeperatedData();
  const [colorValues, setColorValues] = useState<any>([]);
  const [selectedColor, setSelectedColor] = useState<any>([]);
  const { colorFilter, setColorFilter }: any = useFilter();
  const [toggle, setToggle] = useState<any>(false);
  const valuesToMap = Array.isArray(colorValues) ? colorValues[0]?.values : [];
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    if (color) {
      setColorValues(color);
    } else {
      setColorValues([]);
    }
  }, [color?.length]);

  useEffect(() => {
    setColorFilter(selectedColor);
  }, [selectedColor]);

  useEffect(() => {
    const filteredMaterials = selectedColor?.filter((value: any) =>
      colorFilter?.includes(value)
    );
    setSelectedColor(filteredMaterials);
  }, [colorFilter?.length]);

  const handleMaterialSelection = (e: any) => {
    const colorName = e.target.name;
    if (selectedColor.includes(colorName)) {
      setSelectedColor(selectedColor.filter((item: any) => item !== colorName));
    } else {
      setSelectedColor([...selectedColor, colorName]);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleShowMore = () => {
    setDisplayCount(valuesToMap.length);
  };

  const handleShowLess = () => {
    setDisplayCount(6);
  };


  return (
    <div className="filter-container">
      {toggle ? (
        <>
          <div className="filter-text">
            Color
            <button className="toogle" onClick={() => handleToggle()}>
              -
            </button>
          </div>
          {valuesToMap.slice(0, displayCount)?.map((items: any, index: any) => {
            const checkboxId = `checkbox-${index}`;
            return (
              <div className="filters-style">
                <div className="material-name round">
                  <input
                    type="checkbox"
                    id={checkboxId}
                    checked={selectedColor.includes(items.value)}
                    name={items.value}
                    onClick={(e) => {
                      handleMaterialSelection(e);
                    }}
                  />
                  <label
                    htmlFor={checkboxId}
                    style={{
                      backgroundColor: `${items?.value}`,
                      border: `${
                        items?.value !== "White" &&
                        items?.value !== "Multicolor"
                          ? `1px solid ${items?.value}`
                          : "1px solid black"
                      }`,
                    }}
                  ></label>

                  {items.value}
                </div>
                <span>({items.count})</span>
              </div>
            );
          })}
          <div className="show-more-less">
            {displayCount === valuesToMap?.length ? (
              <button className="toogle-list" onClick={handleShowLess}>
                - Less{" "}
              </button>
            ) : (
              <button className="toogle-list" onClick={handleShowMore}>
                +More
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="filter-text">
          Color
          <button className="toogle" onClick={() => handleToggle()}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ColorCard;
