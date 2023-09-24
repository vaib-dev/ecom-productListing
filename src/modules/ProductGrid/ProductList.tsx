import { useEffect, useState } from "react";
import { useFilter } from "Context/SelectedFilterContext";
import { Image, Price, Sticker, Title } from "./components";
import { useFilterProductList } from "hooks/useFilterProductList";

const ProductList = () => {
  const { productData, priceFilter }: any = useFilter();
  const [productList, setProductList] = useState<any>([]);

  useEffect(() => {
    if (productData?.length > 0) {
      setProductList(productData);
    }
  }, [productData]);

  const filteredProductList = useFilterProductList(productList, priceFilter);

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
