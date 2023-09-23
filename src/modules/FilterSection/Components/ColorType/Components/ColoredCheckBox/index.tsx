import React from "react";

const ColoredCheckBox = ({
  checkboxId,
  valueCheck,
  itemName,
  handleColorSelection,
  stockAvailable,
}: any) => {
  return (
    <>
      <div className="material-name round">
        <input
          type="checkbox"
          id={checkboxId}
          checked={valueCheck}
          name={itemName}
          onClick={handleColorSelection}
        />
        <label
          htmlFor={checkboxId}
          style={{
            backgroundColor: `${itemName}`,
            border: `${
              itemName !== "White" && itemName !== "Multicolor"
                ? `1px solid ${itemName}`
                : "1px solid black"
            }`,
          }}
        ></label>

        {itemName}
      </div>
      <span>({stockAvailable})</span>
    </>
  );
};

export default ColoredCheckBox;
