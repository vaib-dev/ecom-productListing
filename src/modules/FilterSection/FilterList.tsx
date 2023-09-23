import TextTypeCard from "./Components/TextType";
import ColorTypeCard from "./Components/ColorType";
import { useFilter } from "Context/SelectedFilterContext";
import RangeTypeCard from "./Components/RangeType";

const Filters = () => {
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
        {filterWithTypeText?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <TextTypeCard data={item?.values} filterName={item?.name} />
            </div>
          );
        })}
      </div>
      <div id="color-type">
        {filterWithTypeColor?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <ColorTypeCard data={item?.values} filterName={item?.name} />
            </div>
          );
        })}
      </div>
      <div id="range-type">
        {filterWithTypeRange?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <RangeTypeCard data={item?.values} filterName={item?.name} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
