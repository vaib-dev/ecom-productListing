import React from "react";

const CheckBox = ({
  checkboxId,
  valueCheck,
  itemName,
  handleMaterialSelection,
  stockAvailable,
}: any) => {
  return (
    <>
      <div className="data-name round-mt">
        <input
          type="checkbox"
          id={checkboxId}
          checked={valueCheck}
          name={itemName}
          onClick={handleMaterialSelection}
        />
        <label htmlFor={checkboxId} style={{ backgroundColor: "none" }}></label>

        {itemName}
      </div>
      <span>({stockAvailable})</span>
    </>
  );
};

export default CheckBox;
