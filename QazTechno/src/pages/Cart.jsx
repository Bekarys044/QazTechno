import { Trash2, NotepadText, Package, CreditCard } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useUser } from "@clerk/clerk-react";
import emptyCart from "../assets/images/empty-cart.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Cart({ location }) {
  const { cartItems, updateQuantity, delateItem } = useCart();
  const { user } = useUser();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5">
      {cartItems.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl mb-5 text-white">
            {t("Cart.title", { count: cartItems.length })}
          </h1>
          <div>
            <div className="mt-10">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-5 rounded-md flex flex-col md:flex-row items-center justify-between gap-4 mt-3"
                >
                  <div className="flex items-center gap-4 w-full md:w-[50%]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1 line-clamp-2 md:line-clamp-3">
                      <h1 className="text-base font-semibold">{item.title}</h1>
                      <p className="text-red-500 font-semibold text-lg">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-500 text-white flex justify-center items-center gap-4 px-4 py-2 rounded-md font-bold text-xl">
                    <button
                      onClick={() => updateQuantity(item.id, "decrease")}
                      className="cursor-pointer"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "increase")}
                      className="cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <span
                    onClick={() => delateItem(item.id)}
                    className="bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl"
                  >
                    <Trash2 className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Delivery Info */}
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
                <h1 className="text-gray-800 font-bold text-xl">
                  {t("Cart.delivery_info")}
                </h1>
                <div className="flex flex-col space-y-1">
                  <label>{t("Cart.full_name")}</label>
                  <input
                    type="text"
                    placeholder={t("Cart.full_name")}
                    className="p-2 rounded-md"
                    value={user?.fullName}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label>{t("Cart.address")}</label>
                  <input
                    type="text"
                    placeholder={t("Cart.address")}
                    className="p-2 rounded-md"
                    value={location?.country}
                  />
                </div>
                <div className="w-full flex gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label>{t("Cart.state")}</label>
                    <input
                      type="text"
                      placeholder={t("Cart.state")}
                      className="p-2 rounded-md w-full"
                      value={location?.state}
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label>{t("Cart.postcode")}</label>
                    <input
                      type="text"
                      placeholder={t("Cart.postcode")}
                      className="p-2 rounded-md w-full"
                      value={location?.postcode}
                    />
                  </div>
                </div>
                <div className="w-full flex gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label>{t("Cart.country")}</label>
                    <input
                      type="text"
                      placeholder={t("Cart.country")}
                      className="p-2 rounded-md w-full"
                      value={location?.country}
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label>{t("Cart.number")}</label>
                    <input
                      type="number"
                      placeholder={t("Cart.number")}
                      className="p-2 rounded-md w-full"
                    />
                  </div>
                </div>

                <button className="bg-red-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer">
                  {t("Cart.submit")}
                </button>
              </div>

              {/* Bill Details */}
              <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                <h1 className="text-gray-800 font-bold text-xl">
                  {t("Cart.bill_details")}
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <NotepadText />
                    {t("Cart.all_product_price")}
                  </h1>
                  <p>${totalPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <Package />
                    {t("Cart.delivery_info_days")}
                  </h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <CreditCard />
                    {t("Cart.reward")}
                  </h1>
                </div>
                <hr className="text-gray-200 mt-2" />
                <div className="flex justify-center items-center">
                  <h1 className="font-semibold text-lg">
                    {t("Cart.grand_total")}
                  </h1>
                  <p className="font-semibold text-lg">${totalPrice + 5}</p>
                </div>
                <div>
                  <h1 className="font-semibold text-gray-700 mb-3 mt-7">
                    {t("Cart.apply_promo")}
                  </h1>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder={t("Cart.enter_code")}
                      className="p-2 rounded-md w-full border border-gray-200"
                    />
                    <button className="bg-white text-black border border-gray-200 cursor-pointer py-1 px-4 rounded-md">
                      {t("Cart.apply")}
                    </button>
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-2 w-full cursor-pointer">
                  {t("Cart.checkout")}
                </button>
              </div>
            </div>

            <div className="flex items-center mt-10 justify-center text-gray-700 w-full">
              ---------------
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center h-[600px]">
          <h2 className="text-red-500/80 font-bold text-5xl text-muted">
            {t("Cart.empty_cart")}
          </h2>
          <img src={emptyCart} className="w-[400px]" />
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
          >
            {t("Cart.continue_shopping")}
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
