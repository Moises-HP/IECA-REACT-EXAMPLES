import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import ProductItem from "./ProductItem";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const { getProducts } = useApi();

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div>
      <h1 className="font-bold">Products</h1>
      <ul className="flex gap-4 flex-wrap justify-center">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsComponent;
