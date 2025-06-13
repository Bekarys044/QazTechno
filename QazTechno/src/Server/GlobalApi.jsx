import { createContext, useState, useCallback, useContext, useMemo, useEffect } from "react";
import axios from "axios";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("https://fakestoreapi.in/api/products?limit=150");
      const items = res.data.products || [];

      setProducts(items); 

      const uniqueCategories = ["All", ...new Set(items.map(item => item.category).filter(Boolean))];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

 
  const getUniqueValues = useCallback((key) => {
    const unique = new Set(products.map((item) => item[key]));
    return ["All", ...[...unique].filter(Boolean)];
  }, [products]);

 
  const categoryOnlyData = useMemo(() => getUniqueValues("category"), [getUniqueValues]);
  const brandOnlyData = useMemo(() => getUniqueValues("brand"), [getUniqueValues]);

 
  const value = useMemo(() => ({
    products,
    categories,
    categoryOnlyData,
    brandOnlyData,
    loading,
    error,
    fetchCategories,
  }), [ products, categories, categoryOnlyData, brandOnlyData, loading, error, fetchCategories]);

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};


// eslint-disable-next-line react-refresh/only-export-components
export const useCategories = () => useContext(CategoryContext);
