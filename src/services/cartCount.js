import { useSelector } from "react-redux";
import { selectCartItems } from "../store/slices/cartSlice";

export default function CartCount() {
  // Implementation here

  const Cart = useSelector(selectCartItems);
  const Count = Cart.reduce((acc, item) => (acc += item.Qty), 0);
  return Count;
}
