import { useNavigate } from "react-router-dom"
import { IoCardOutline } from "react-icons/io5";
import { Clock } from 'lucide-react'
import { useCart } from "../context/CartContext";
import { useTranslation } from "react-i18next";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bg-white relative rounded-2xl cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out">

      <div className="absolute z-10 top-2 left-1 flex gap-2 p-1 bg-red-500 rounded-md">
        <Clock className="text-white" />
        <p className='text-white font-pop text-[0.875rem]'>{t("ProductCard.installment")}</p>
      </div>

      <img
        src={product.image}
        className="w-full h-64 object-cover rounded-md"
        onClick={() => navigate(`/SingleProduct/${product.id}`)}
      />

      <h2 className="line-clamp-2 p-1 font-semibold">{product.title}</h2>

      <div className="flex gap-2 items-center mb-2">
        <p className="my-1 text-[1.5rem] font-bold text-red-500 hover:text-red-400">
          $ {product.price}
        </p>
        <span className="text-[1rem] font-semibold text-gray-500 ml-2 line-through">
          ${(product.price * 1.1).toFixed(2)}
        </span>
        <p className="text-[1rem] text-red-500 font-pop">-10%</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="bg-primary hover:bg-[#2066e8] px-2 py-1 text-lg rounded-md text-white w-full flex gap-12 items-center justify-center"
      >
        <IoCardOutline className="w-6 h-6" />{t("ProductCard.add_to_cart")}
      </button>
    </div>
  );
}

export default ProductCard;
