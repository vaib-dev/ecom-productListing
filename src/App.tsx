import ProductList from "./modules/ProductGrid/ProductList";
import Header from "./modules/Header";
import "./common.css";
import FilterList from "./modules/FilterSection/FilterList";
import Breadcrumbs from "./modules/Breadcrumbs";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="breadcrumbs">
        <Breadcrumbs />
      </div>
      <div className="page-container">
        <div className="filters">
          <FilterList />
        </div>
        <div className="products">
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default App;
