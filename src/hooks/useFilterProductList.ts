import { useEffect, useState } from "react";

export function useFilterProductList(productList: any[], priceFilter: any) {
  const [filteredProductList, setFilteredProductList] = useState<any[]>([]);

  useEffect(() => {
    const minPrice = parseInt(priceFilter[0]);
    const maxPrice = parseInt(priceFilter[1]);

    if (!priceFilter?.length) {
      setFilteredProductList(productList);
    } else {
      const filteredProducts = productList.filter((product: any) => {
        const productPrice = product.price[0];
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setFilteredProductList(filteredProducts);
    }
  }, [priceFilter, productList]);

  return filteredProductList;
}
