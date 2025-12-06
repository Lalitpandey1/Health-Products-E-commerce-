import { useSelector } from "react-redux";
import { selectCartItems } from "../store/slices/cartSlice";

const CartCount = () => {
  const Cart = useSelector(selectCartItems);
  const Count = Cart.reduce((acc, item) => (acc += item.Qty), 0);
  return Count;
};

export default CartCount;
