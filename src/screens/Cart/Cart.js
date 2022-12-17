import React, { useEffect, useState } from "react";
import ProductList from "../../components/patterns/ProductList";
import { statusTypes } from "../../components/patterns/ProductList/ProductList";

export default function Cart() {
  const [cartState, setCartState] = useState({
    data: [],
    status: statusTypes.loading,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const productFetch = await fetch("/api/cart");
        const productResponse = await productFetch.json();
        setCartState({
          data: productResponse.data,
          status: statusTypes.loaded,
        });
      } catch (ex) {
        console.error(ex);
        setCartState({ data: [], status: statusTypes.errored });
      }
    };
    getData();
  }, []);

  return <ProductList data={cartState.data} status={cartState.status} />;
}
