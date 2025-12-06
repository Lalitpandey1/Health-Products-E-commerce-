import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductLookup } from "../../store/slices/productSlice";
import { removeItem, updateQuantity } from "../../store/slices/cartSlice";

const CartItem = ({ id, Qty }) => {
  const dispatch = useDispatch();
  const productLookup = useSelector(selectProductLookup);

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: id, change: 1 }));
  };
  const handleDecrease = () => {
    dispatch(updateQuantity({ id: id, change: -1 }));
  };
  const product = productLookup[id];
  if (!product) return;

  return (
    <div>
      {/* Product Div */}
      <div className="flex my-3 m3:text-xs m2:text-sm md:text-[16px] gap-1 m2:gap-2 xl:text-lg ">
        {/* Product Image */}
        <img
          src={product.images[0]}
          alt="Product Image for Cart"
          className="max-w-15 m2:max-w-24 m3:max-w-18 max-h-15 m3:max-h-20 m2:max-h-26 shadow-xl rounded-xl"
        />

        {/* Product Info and Action*/}
        <div className="flex m2:flex-row flex-col justify-between w-full bg-white rounded-lg">
          {/* Product Info */}
          <div className="flex flex-col  text-left text-[11px] m3:text-xs m1:text-lg  font-semibold justify-between ">
            <p>{product.title}</p>
            <p className="text-gray-600 font-semibold text-[10px] m2:text-[13px]">
              {product.Bestcategory}
            </p>
            <p className="my-2"></p>
            <div className="inline-block">
              {/* Label */}
              <p className="text-[8px] m1:ml-3 m2:text-xs md:text-sm font-semibold text-gray-500 mb-0.5">
                Qty
              </p>

              <div className="flex items-center border border-gray-300 rounded-sm w-fit bg-white">
                <button
                  onClick={handleDecrease}
                  className="px-0.5 md:px-1 text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none leading-none"
                >
                  -
                </button>

                <input
                  type="text"
                  value={Qty}
                  readOnly
                  className="w-3 m2:w-5 md:w-6 text-center border-none p-0 text-gray-700 text-[8px] m2:text-xs md:text-sm focus:ring-0 cursor-default bg-transparent leading-none"
                />

                <button
                  onClick={handleIncrease}
                  className="px-0.5 md:px-1 text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none leading-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Product Action */}
          <div className="flex flex-wrap m2:flex-col justify-between">
            <button className="text-right font-semibold text-gray-800 text-[10px] m2:text-xs md:text-lg">
              ₹{product.Price}
            </button>
            <button
              onClick={() => handleRemoveItem(product.id)}
              className="text-[8px] m2:text-xs md:text-sm text-gray-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <hr className="text-gray-400" />
    </div>
  );
};

export default CartItem;
