import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import { Clock } from "lucide-react";
import { IoCardOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function UserProductPage() {
  const { t } = useTranslation();
  const [userProducts, setUserProducts] = useState([]);

  const handleAddProduct = (product) => {
    setUserProducts([product, ...userProducts]);
  };

  return (
    <div className="container-custom p-6">
      <h1 className="text-2xl text-white font-bold mb-4">
        {t("UserProductPage.title")}
      </h1>
      <AddProductForm onAdd={handleAddProduct} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {userProducts.map((item, index) => (
          <div
            key={index}
            className="bg-white relative rounded-2xl cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out"
          >
            <div className="absolute z-10 top-2 left-1 flex gap-2 p-1 bg-red-500 rounded-md">
              <Clock className="text-white" />
              <p className="text-white font-pop text-[0.875rem]">
                {t("UserProductPage.installment")}
              </p>
            </div>

            <img
              src={item.image}
              className="w-full h-64 input-field object-cover rounded-md"
              alt={item.title}
            />

            <h2 className="line-clamp-2 p-1 font-semibold">{item.title}</h2>

            <div className="flex gap-2 items-center mb-2 px-2">
              <p className="text-[1.5rem] font-bold text-red-500 hover:text-red-400">
                ${item.price}
              </p>
              <span className="text-[1rem] font-semibold text-gray-500 line-through">
                ${(item.price * 1.1).toFixed(2)}
              </span>
              <p className="text-[1rem] text-red-500 font-pop">
                {t("UserProductPage.price_discount")}
              </p>
            </div>

            <button
              onClick={() => alert(t("UserProductPage.added_alert"))}
              className="bg-primary hover:bg-[#2066e8] px-2 py-1 text-lg rounded-md text-white w-full flex gap-12 items-center justify-center"
            >
              <IoCardOutline className="w-6 h-6" /> {t("UserProductPage.add_to_cart")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProductPage;
