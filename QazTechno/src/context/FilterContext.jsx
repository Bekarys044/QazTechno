
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [search, setSearch] = useState("");

  return (
    <FilterContext.Provider value={{ search, setSearch, brand, setBrand, category, setCategory, priceRange, setPriceRange }}>
      {children}
    </FilterContext.Provider>
  );
};
