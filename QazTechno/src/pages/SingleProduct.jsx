import { useParams } from "react-router-dom";
import BreadCrums from "../components/BreadCrums";
import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from '../assets/video/Loading4.webm';
import { useCart } from "../context/CartContext";
import { useTranslation } from "react-i18next";

function SingleProduct() {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const params = useParams();

  const [singleProduct, setSingleProduct] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);


  const getSingleProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getSingleProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <video muted autoPlay loop playsInline className="h-20 w-20">
          <source src={Loading} type="video/webm" />
        </video>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10">{t("SingleProduct.error")}: {error.message}</div>;
  }

  if (!singleProduct || !singleProduct.product) {
    return <div className="text-center py-10">{t("SingleProduct.not_found")}</div>;
  }

  const product = singleProduct.product;

  return (
    <div className="my-20">
      <BreadCrums title={product.title} />
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img src={product.image} className="rounded-2xl w-full h-auto max-h-[500px] object-contain" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="d:text-3xl font-bold text-gray-800">
            {product.title}
          </h1>
          <div className="text-gray-300 font-pop">
            {t("SingleProduct.brand_category", {
              brand: product.brand?.toUpperCase(),
              category: product.category?.toUpperCase(),
              model: product.model || "N/A"
            })}
          </div>

          <p className="text-xl text-red-500 font-bold flex items-center gap-4">
            <span>${product.price}</span>
            <span className="bg-red-500 text-white p-2 rounded-full ">
              {t("SingleProduct.price_label", { discount: product.discount })}
            </span>
          </p>
          
          <div className="text-gray-600">{product.description}</div>
          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="w-20 font-pop text-white">
              {t("SingleProduct.quantity")}
            </label>
            <input
              id="quantity"
              type="number"
              min={1}
              defaultValue={1}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1
                      focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => addToCart(product)}
              className="px-5 py-2 flex gap-2 text-lg bg-red-500 text-white 
                rounded-md hover:bg-red-400"
            >
              <ShoppingCart />
              {t("SingleProduct.add_to_cart")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
