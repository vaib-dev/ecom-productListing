import ProductCard from "./modules/ProductsList";
import Header from "./modules/Header";
import "./common.css";
import Filters from "./modules/FilterSection/Filters";
import { FilterProvider } from "Context/SelectedFilterContext";
import Breadcrumbs from "./modules/Breadcrumbs";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <FilterProvider>
          <div className="breadcrumbs">
            <Breadcrumbs />
          </div>
        <div className="page-container">
          <div className="filters">
            <Filters />
          </div>
          <div className="products">
            <ProductCard />
          </div>
        </div>
      </FilterProvider>
    </>
  );
}

export default App;
