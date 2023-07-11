const ProductItem = ({ product }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-white p-4 w-44 items-center">
      <img src={product.image} className="w-24" alt={product.title} />
      <h1>{product.title}</h1>
      <span>${product.price}</span>
    </div>
  );
};

export default ProductItem;
