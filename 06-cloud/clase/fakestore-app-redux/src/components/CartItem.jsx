import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex border border-gray-300 shadow-sm rounded-xl p-4 gap-4 m-4 max-w-[500px]">
      <img
        src={product.image}
        alt={product.title}
        className="h-28 object-cover self-center"
      />
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="font-bold">{product.title}</h2>
        <span>${product.price}</span>
      </div>
      <button
        className="text-red-500"
        onClick={() => {
          dispatch(removeFromCart(product.id));
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
