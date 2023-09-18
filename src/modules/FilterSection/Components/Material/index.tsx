import React, { useState, useEffect } from "react";
import { useSeperatedData } from "hooks/seperateFilterData";
import { useFilter } from "Context/SelectedFilterContext";

const MaterialCard = () => {
  const { material } = useSeperatedData();
  const [materialValues, setMaterialValues] = useState<any>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<any>([]);
  const { materialFilter, setMaterialFilter }: any = useFilter();
  const [toggle, setToggle] = useState<any>(false);
  const valuesToMap = Array.isArray(materialValues)
    ? materialValues[0]?.values
    : [];

  useEffect(() => {
    if (material) {
      setMaterialValues(material);
    } else {
      setMaterialValues([]);
    }
  }, [material?.length]);

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
    if (selectedMaterials.includes(materialName)) {
      setSelectedMaterials(
        selectedMaterials.filter((item: any) => item !== materialName)
      );
    } else {
      setSelectedMaterials([...selectedMaterials, materialName]);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  return (
    <div className="filter-container">
      {toggle ? (
        <>
          <div className="filter-text">
            Material
            <button className="toogle" onClick={() => handleToggle()}>
              -
            </button>
          </div>
          {valuesToMap?.map((items: any, index: number) => {
            const checkboxId = `checkbox-mt-${index}`;
            return (
              <div className="filters-style">
                <div className="material-name round-mt">
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
          })}{" "}
        </>
      ) : (
        <>
          <div className="filter-text">
            Material
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
