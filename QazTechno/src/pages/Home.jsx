
import { History, Car, Leaf, Baby, TvMinimal, Drill  } from 'lucide-react'

import { useCategories } from "../Server/GlobalApi";

import Slider from "react-slick";


import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";



import carusel1 from '../assets/images/carusel1.webp'
import carusel2 from '../assets/images/carusel2.webp'
import carusel3 from '../assets/images/carusel3.webp'

import Img1 from '../assets/images/img1.webp'
import Img2 from '../assets/images/img2.webp'
import Img3 from '../assets/images/img3.webp'
import Img4 from '../assets/images/img4.webp'


import Img5 from '../assets/images/img5.webp'
import Img6 from '../assets/images/img6.webp'
import Img7 from '../assets/images/img7.webp'
import Img8 from '../assets/images/img8.webp'
import Img9 from '../assets/images/img9.webp'
import Img10 from '../assets/images/img10.webp'
import Img11 from '../assets/images/img11.webp'
import Img12 from '../assets/images/img12.webp'
import Img13 from '../assets/images/img13.webp'




import Products from '../components/Products';
function Home() {

    const { categoryOnlyData,brandOnlyData  } = useCategories()

    const { brand, setBrand, category, setCategory, priceRange, setPriceRange } = useContext(FilterContext);

   
     const handleReset = () => {
       setBrand("All");
       setCategory("All");
       setPriceRange([0, 1000]);
     };

    // slick
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
   <>
    <div className="container-custom mt-8    flex   justify-between items-center">
        <div className="flex gap-2 ">
            <History className='text-white '/>
            <p className='text-white font-pop text-[0.875rem] hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]'>Рассрочка 0-0-6</p>
        </div>
        <div className="flex gap-2">
            <Car className='text-white'/>
            <p className='text-white font-pop text-[0.875rem] hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]'>Казахстанские продавцы</p>
        </div>
        <div className="flex gap-2">
            <Leaf className='text-white'/>
            <p className='text-white font-pop text-[0.875rem] hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]'>Дом и сад</p>
        </div>
        <div className="flex gap-2">
            <Baby  className='text-white'/>
            <p className='text-white font-pop text-[0.875rem] hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]'>Бытовая техника</p>
        </div>
        <div className="flex gap-2">
            <TvMinimal className='text-white' />
            <p className='text-white font-pop text-[0.875rem] hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]'>Бытовая техника</p>
        </div>
        <div className="flex gap-2">
            <Drill  className='text-white'/>
            <p className='text-white font-pop text-[0.875rem] hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]'>Строительство и ремонт</p>
        </div>
    </div>
    
    <div className="container-custom mt-8">
          <Slider {...settings}>
      <div>
        <img src={carusel1}  />
      </div>
      <div>
         <img src={carusel2}  />
      </div>
      <div>
         <img src={carusel3}  />
      </div>
      
    </Slider>
    </div>




     <div className='mt-[1.875rem]  container-custom   grid grid-cols-2 gap-4'>
         <img src={Img1}  className='rounded-md'/>
         <img src={Img2}  className='rounded-md'/>
         <img src={Img3}  className='rounded-md'/>
         <img src={Img4}  className='rounded-md'/>
     </div>




     {/* filter section */}
     <div className='container-custom  mt-10  py-4 px-3'>
        <div className='p-2'>
            <h2 className='mt-5 font-semibold text-xl text-gray-600'>Category</h2>
             <div className="flex flex-col gap-2 mt-3">
                 {categoryOnlyData.map((item, index) => (
                   <div key={index} className="flex gap-2 items-center">
                     <input
                       type="radio"
                       id={`category-${index}`}
                       name="category"
                       checked={category === item}
                       value={item}
                       onChange={(e) => setCategory(e.target.value)}
                     />
                     <label
                       htmlFor={`category-${index}`}
                       className="cursor-pointer text-gray-600 text-sm font-semibold"
                     >
                       {item}
                     </label>
                   </div>
                 ))}
             </div>

                 <h1 className="mt-5 font-semibold text-xl text-gray-600 mb-3">Brand</h1>
                  <select
                      className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                   >

                    {brandOnlyData.map((item, index) => (
                      <option key={index} value={item}>
                        {item?.toUpperCase()}
                      </option>
                    ))}
                 </select>


                 <h1 className="mt-5 font-semibold text-xl text-gray-600 mb-2">Price Range</h1>
                 <div className="flex flex-col gap-2">
                      <label className='text-white'>
                        ${priceRange[0]} - ${priceRange[1]}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                        className="w-full h-2"
                      />
                      
                      <button
                        className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md mt-3"
                        onClick={handleReset}
                      >
                        Reset Filter
                      </button>
                 </div>
        </div>
     </div>
     
     <Products/>

 

     <div className='container-custom mt-10 grid grid-cols-3 gap-4 mb-20 '>
         <img src={Img5} className='rounded-md hover:brightness-75 transition-all duration-300' />
         <img src={Img6} className='rounded-md hover:brightness-75 transition-all duration-300' />
         <img src={Img7} className='rounded-md hover:brightness-75 transition-all duration-300' />
         <img src={Img8} className='rounded-md hover:brightness-75 transition-all duration-300' />
         <img src={Img9} className='rounded-md hover:brightness-75 transition-all duration-300' />
         <img src={Img10} className='rounded-md hover:brightness-75 transition-all duration-300' />
         <img src={Img11} className='rounded-md hover:brightness-75 transition-all duration-300' />
         <img src={Img12} className='rounded-md hover:brightness-75 transition-all duration-300' />
         <img src={Img13} className='rounded-md hover:brightness-75 transition-all duration-300' />
     </div>
   </>
    
  )
}

export default Home
