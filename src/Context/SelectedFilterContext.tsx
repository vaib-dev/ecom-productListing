import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext({});

export function FilterProvider({ children }: any) {
  const [materialFilter, setMaterialFilter] = useState<any>([]);
  const [colorFilter, setColorFilter] = useState<any>([]);
  const [priceFilter, setPriceFilter] = useState<any>([]);

  return (
    <FilterContext.Provider
      value={{
        materialFilter,
        setMaterialFilter,
        colorFilter,
        setColorFilter,
        priceFilter,
        setPriceFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
