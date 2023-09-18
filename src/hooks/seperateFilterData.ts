import { useFilterData } from "Context/FilterDataContext";

export const useSeperatedData = () => {
  const filterData = useFilterData();
  const separatedData = filterData.reduce((acc: any, obj: any) => {
    const category = obj.name.toLowerCase();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(obj);
    return acc;
  }, {});
  return separatedData;
};
