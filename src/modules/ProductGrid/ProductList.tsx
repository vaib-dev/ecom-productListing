import { useEffect, useState } from "react";
import { useFilter } from "Context/SelectedFilterContext";
import { Image, Price, Sticker, Title } from "./components";

const ProductList = () => {
  const [productList, setProductList] = useState<any>([]);
  const { productData, priceFilter }: any = useFilter();
  const [filteredProductList, setFilterProductList] = useState<any>([]);

  useEffect(() => {
    if (productData?.length > 0) {
      setProductList(productData);
      setFilterProductList(productData);
    }
  }, [productData]);

  useEffect(() => {
    const minPrice = parseInt(priceFilter[0]);
    const maxPrice = parseInt(priceFilter[1]);
    const filteredProducts = productList.filter((product: any) => {
      const productPrice = product.price[0];
      return productPrice >= minPrice && productPrice <= maxPrice;
    });
    setFilterProductList(filteredProducts);

    if (priceFilter === 0) {
      setFilterProductList(productList);
    }
  }, [priceFilter]);

  const renderProductList = () => {
    return (
      <>
        {filteredProductList?.map((items: any, index: any) => {
          return (
            <div className="product" key={index}>
              <a href={items?.product_url} target="_blank">
                <Image url={items?.image_url} title={items?.title} />
                {items?.compare_at && (
                  <Sticker
                    comparedPrice={items?.compare_at}
                    originalPrice={items?.price[0]}
                  />
                )}
              </a>
              <Title text={items?.title} />
              <Price newPrice={items?.compare_at} oldPrice={items?.price[0]} />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>{filteredProductList?.length ? renderProductList() : <>Loading...</>}</>
  );
};

export default ProductList;
