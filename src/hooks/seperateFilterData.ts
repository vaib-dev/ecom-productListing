import { useFilter } from "Context/SelectedFilterContext";

export const useSeperatedData = () => {
  const { filterData }: any = useFilter();
  const separatedData: any = filterData?.reduce((acc: any, obj: any) => {
    const category = obj.name.toLowerCase();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(obj);
    return acc;
  }, {});
  return separatedData;
};
