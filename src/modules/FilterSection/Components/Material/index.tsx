import React, { useState, useEffect } from "react";
import { useFilter } from "Context/SelectedFilterContext";

const MaterialCard = ({ data, filterName }: any) => {
  const [materialValues, setMaterialValues] = useState<any>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<any>([]);
  const [toggle, setToggle] = useState<any>(false);
  const [displayCount, setDisplayCount] = useState(6);
  
  const { materialFilter, setMaterialFilter }: any = useFilter();

  useEffect(() => {
    if (data) {
      setMaterialValues(data);
    } else {
      setMaterialValues([]);
    }
  }, [data?.length]);

  useEffect(() => {
    setMaterialFilter(selectedMaterials);
  }, [selectedMaterials]);

  useEffect(() => {
    const filteredMaterials = selectedMaterials?.filter((value: any) =>
      materialFilter?.includes(value)
    );
    setSelectedMaterials(filteredMaterials);
  }, [materialFilter?.length]);

  const handleMaterialSelection = (e: any) => {
    const materialName = e.target.name;
    if (selectedMaterials?.includes(materialName)) {
      setSelectedMaterials(
        selectedMaterials?.filter((item: any) => item !== materialName)
      );
    } else {
      setSelectedMaterials([...selectedMaterials, materialName]);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleShowMore = () => {
    setDisplayCount(materialValues?.length);
  };

  const handleShowLess = () => {
    setDisplayCount(6);
  };

  return (
    <div className="filter-container">
      {toggle ? (
        <>
          <div className="filter-text">
            {filterName}
            <button className="toogle" onClick={() => handleToggle()}>
              -
            </button>
          </div>
          {materialValues
            ?.slice(0, displayCount)
            ?.map((items: any, index: number) => {
              const checkboxId = `checkbox-mt-${index}`;
              return (
                <div className="filters-style">
                  <div className="data-name round-mt">
                    <input
                      type="checkbox"
                      id={checkboxId}
                      checked={materialFilter.includes(items.value)}
                      name={items.value}
                      onClick={(e) => {
                        handleMaterialSelection(e);
                      }}
                    />
                    <label
                      htmlFor={checkboxId}
                      style={{ backgroundColor: "none" }}
                    ></label>

                    {items.value}
                  </div>
                  <span>({items.count})</span>
                </div>
              );
            })}
          <div className="show-more-less">
            {displayCount === materialValues?.length ? (
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
        <>
          <div className="filter-text">
            {filterName}
            <button className="toogle" onClick={() => handleToggle()}>
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MaterialCard;
