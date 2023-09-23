import { useState, useEffect } from "react";
import { useFilter } from "Context/SelectedFilterContext";
import { CheckBox } from "./Components";

const TextTypeCard = ({ data, filterName }: any) => {
  const [materialValues, setMaterialValues] = useState<any>(data);
  const [selectedMaterials, setSelectedMaterials] = useState<any>([]);
  const [toggle, setToggle] = useState<any>(false);
  const [displayCount, setDisplayCount] = useState(6);

  const { materialFilter, setMaterialFilter }: any = useFilter();

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
      <div className="filter-text">
        {filterName}
        <button className="toogle" onClick={() => handleToggle()}>
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && (
        <>
          {materialValues
            ?.slice(0, displayCount)
            ?.map((items: any, index: any) => {
              const checkboxId = `checkbox-mt-${index}`;
              return (
                <div className="filters-style" key={index}>
                  <CheckBox
                    checkboxId={checkboxId}
                    valueCheck={materialFilter.includes(items.value)}
                    itemName={items?.value}
                    handleMaterialSelection={handleMaterialSelection}
                    stockAvailable={items?.count}
                  />
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
      )}
    </div>
  );
};

export default TextTypeCard;
