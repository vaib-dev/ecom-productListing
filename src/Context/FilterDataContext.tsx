import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import axios from "axios";

interface FilterDataProviderProps {
  children: ReactNode;
}

const FilterDataContext = createContext<any>([]);

export function useFilterData() {
  return useContext(FilterDataContext);
}

export const FilterDataProvider: any = ({ children }: any) => {
  const [filterData, setFilterData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { facets },
        } = await axios.get(
          "https://findify-assets.s3.amazonaws.com/test-task/test_response.json"
        );
        if (facets.length > 0) setFilterData(facets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <FilterDataContext.Provider value={filterData}>
      {children}
    </FilterDataContext.Provider>
  );
};
