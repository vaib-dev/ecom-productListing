import MaterialCard from "./Components/Material";
import ColorCard from "./Components/Color";
import PriceCard from "./Components/Price";
import { useSeperatedData } from "hooks/seperateFilterData";
import { useFilter } from "Context/SelectedFilterContext";

const Filters = () => {
  const { material, color }: any = useSeperatedData();
  const { filterData }: any = useFilter();
  const filterWithTypeText = filterData?.filter(
    (item: any) => item.type === "text"
  );
  const filterWithTypeColor = filterData?.filter(
    (item: any) => item.type === "color"
  );
  const filterWithTypeRange = filterData?.filter(
    (item: any) => item.type === "range"
  );

  return (
    <>
      <div className="filter-text h1">FILTERS</div>
      <hr style={{ border: "1px solid #EFEFEF" }} />
      <div id="text-type">
        {filterWithTypeText?.map((item: any) => {
          return (
            <>
              <MaterialCard data={material} />
            </>
          );
        })}
      </div>
      <div id="color-type">
        {filterWithTypeColor?.map((item: any) => {
          return (
            <>
              <ColorCard />
            </>
          );
        })}
      </div>
      <div id="range-type">
        {filterWithTypeRange?.map((item: any) => {
          return (
            <>
              <PriceCard />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
