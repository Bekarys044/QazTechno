

import notfound from '../assets/images/notfound.json'
import Loading from '../assets/video/Loading4.webm'
import { useState, useEffect } from 'react';
import {useCategories } from '../Server/GlobalApi';  


import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

import ProductCard from './ProductCard'
import Pagination from './Pagination';

import Lottie from "lottie-react";


function Products() {

    const { products, loading, error } = useCategories()
    const [filteredData, setFilteredData] = useState([]);
    const [page, setPage] = useState(1);
    
    const { search,  brand,  category,  priceRange,  } = useContext(FilterContext);

     

  
    const pageHandler = (selectedPage) => {
      setPage(selectedPage);
    };
  
    const dynamicPage = Math.ceil(filteredData.length / 8); 
  

    
    useEffect(() => {
      if (products && products.length) {
        setFilteredData(products);
      }
    }, [products]);
  
    
    useEffect(() => {
      let filtered = [...products];
  
      if (category !== "All") {
        filtered = filtered.filter((item) => item.category === category);
      }
  
      if (brand !== "All") {
        filtered = filtered.filter((item) => item.brand === brand);
      }
  
      filtered = filtered.filter(
        (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
      );
  

      if (search.trim()) {
        filtered = filtered.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      }
  
      setFilteredData(filtered);
    }, [search, category, brand, priceRange, products]);
  
    if (error) {
      return (
        <div className="text-center py-10">
          Деректерді жүктеу кезінде қате шықты
        </div>
      );
    }
  
    if (loading || !products.length) {
      return (
        <div className="flex justify-center items-center h-[400px]">
          <video muted autoPlay loop playsInline className="h-20 w-20">
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      );
    }


  return (
    <div className="container-custom ">

      {
        filteredData?.length > 0 ? (
            <div className="flex flex-col justify-center items-center">
              <div className="w-full max-w-screen-xl grid grid-cols-4 gap-7 ">
                {filteredData.slice((page - 1) * 8, page * 8).map((product) => (
                   <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              <Pagination
                pageHandler={pageHandler}
                page={page}
                dynamicPage={dynamicPage}
              />

            </div>
          ) : (
            <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
              <Lottie animationData={notfound} classID="w-[500px]" />
            </div>
          )
      }
    </div>
  )
}

export default Products
