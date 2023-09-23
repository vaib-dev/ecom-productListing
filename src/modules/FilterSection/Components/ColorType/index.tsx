import { useEffect, useState } from "react";
import { useFilter } from "Context/SelectedFilterContext";
import { ColoredCheckBox } from "./Components";

const ColorTypeCard = ({ data, filterName }: any) => {
  const [colorValues, setColorValues] = useState<any>(data);
  const [selectedColor, setSelectedColor] = useState<any>([]);
  const [toggle, setToggle] = useState<any>(false);
  const [displayCount, setDisplayCount] = useState(6);

  const { colorFilter, setColorFilter }: any = useFilter();

  useEffect(() => {
    setColorFilter(selectedColor);
  }, [selectedColor]);

  useEffect(() => {
    const filteredColors = selectedColor?.filter((value: any) =>
      colorFilter?.includes(value)
    );
    setSelectedColor(filteredColors);
  }, [colorFilter?.length]);

  const handleColorSelection = (e: any) => {
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
    setDisplayCount(colorValues.length);
  };

  const handleShowLess = () => {
    setDisplayCount(6);
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
          {colorValues.slice(0, displayCount)?.map((items: any, index: any) => {
            const checkboxId = `checkbox-${index}`;
            return (
              <div className="filters-style" key={index}>
                <ColoredCheckBox
                  checkboxId={checkboxId}
                  valueCheck={colorFilter.includes(items.value)}
                  itemName={items?.value}
                  handleColorSelection={handleColorSelection}
                  stockAvailable={items?.count}
                />
              </div>
            );
          })}
          <div className="show-more-less">
            {displayCount === colorValues?.length ? (
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
      )}
    </div>
  );
};

export default ColorTypeCard;
