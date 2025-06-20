import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import ProductListView from "../components/ProductListView";
import Loading from "../assets/video/Loading4.webm";
import { useTranslation } from "react-i18next";

function CategoryProduct() {
  const [searchData, setSearchData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      const data = res.data.products;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="container-custom mt-10">
      {searchData.length > 0 ? (
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn-primary mb-6 flex gap-1 hover:bg-red-500 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <ChevronLeft />
            {t("CategoryProduct.back")}
          </button>

          {(showAll ? searchData : searchData.slice(0, 6)).map((product, index) => (
            <ProductListView key={index} product={product} />
          ))}

          {!showAll && searchData.length > 6 && (
            <div className="flex justify-center mt-10 mb-10">
              <button
                onClick={() => setShowAll(true)}
                className="btn-secondary"
              >
                {t("CategoryProduct.all_view")}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

export default CategoryProduct;
