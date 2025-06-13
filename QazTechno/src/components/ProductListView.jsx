import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"



function ProductListView({ product} ) {

  const { addToCart } = useCart()
  const navigate = useNavigate()

   
  return (
    <div className="space-y-4 mt-2 rounded-md  border">
       <div className="bg-primary flex gap-7 items-center p-2 rounded-md" >
           
           <img src={product.image} alt={product.title} 
            onClick={() => navigate(`/SingleProduct/${product.id}`)}
            className="w-60 h-60 cursor-pointer rounded-md"/>

           <div className="space-y-2 ">
              <h2 className="font-bold font-pop text-white   text-2xl line-clamp-2 hover:text-transparent 
              bg-clip-text bg-gradient-to-r from-blue-900 to-purple-400 w-[80%]
              " style={{ transition: 'var(--transition-fast)' }}>

                {product.title}
              </h2>

              <p className="font-semibold text-lg flex gap-3 items-center">
                <span className="text-4xl font-sans">
                    $ {product.price} 
                </span>
                <span className="text-1xl "> 
                    Users are rewarded {product.discount} %
                </span>
              </p>
              <p>
               
              </p>
              <button 
              onClick={() => addToCart(product)}
              style={{ transition: 'var(--transition-fast)' }} className="bg-red-500  hover:bg-red-400  font-pop font-medium   text-white p-2 rounded-md">
                  Add to Cart
              </button>
              
           </div>

       </div>
    </div> 
  )
}

export default ProductListView
