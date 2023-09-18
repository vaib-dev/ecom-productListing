import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFilter } from "Context/SelectedFilterContext";

const ProductCard = () => {
  const [productList, setProductList] = useState<any>([]);
  const { priceFilter }: any = useFilter();

  const getAllProducts = async () => {
    const {
      data: { items },
    } = await axios.get(
      "https://findify-assets.s3.amazonaws.com/test-task/test_response.json"
    );
    setProductList(items);
    return items || [];
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const minPrice = parseInt(priceFilter[0]);
    const maxPrice = parseInt(priceFilter[1]);

    const filteredProducts = productList.filter((product: any) => {
      const productPrice = product.price[0];
      return productPrice >= minPrice && productPrice <= maxPrice;
    });
    setProductList(filteredProducts);
    if (priceFilter === 0) {
      getAllProducts();
    }
  }, [priceFilter]);
  console.log(priceFilter);
  return (
    <>
      {productList?.map((items: any) => {
        return items?.compare_at ? (
          <div className="product">
            <a href={items?.product_url} target="_blank">
              <img src={items?.image_url} alt={items?.title} />
              <span className="right-badge">SALE</span>
              <span className="left-badge">
                {Math.floor(
                  ((items?.compare_at - items?.price[0]) / items?.compare_at) *
                    100
                )}
                % OFF
              </span>
            </a>
            <div className="name">{items?.title}</div>
            <div className="price">
              <span className="org">${items?.compare_at}</span>
              <span> ${items?.price[0]}</span>
            </div>
          </div>
        ) : (
          <div className="product">
            <a href={items?.product_url} target="_blank">
              <img src={items?.image_url} alt={items?.title} />
            </a>
            <div className="name">{items?.title}</div>
            <div className="price">${items?.price[0]}</div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
