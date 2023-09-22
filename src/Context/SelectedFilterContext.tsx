import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const FilterContext = createContext({});

export function FilterProvider({ children }: any) {
  const [materialFilter, setMaterialFilter] = useState<any>([]);
  const [colorFilter, setColorFilter] = useState<any>([]);
  const [priceFilter, setPriceFilter] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [productData, setProductData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://findify-assets.s3.amazonaws.com/test-task/test_response.json"
        );
        const { facets, items } = data;

        if (facets.length > 0) setFilterData(facets);
        if(items.length > 0) setProductData(items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <FilterContext.Provider
      value={{
        filterData,
        productData,
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
