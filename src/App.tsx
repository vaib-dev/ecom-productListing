import ProductCard from "./modules/ProductGrid";
import Header from "./modules/Header";
import "./common.css";
import Filters from "./modules/FilterSection/Filters";
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
          <Filters />
        </div>
        <div className="products">
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default App;
