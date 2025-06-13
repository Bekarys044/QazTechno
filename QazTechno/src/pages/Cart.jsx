import { Trash2, NotepadText, Package, CreditCard} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useUser } from "@clerk/clerk-react";
import emptyCart from '../assets/images/empty-cart.png'
import { useNavigate } from "react-router-dom";


function Cart({location}) {

  const { cartItems, updateQuantity, delateItem } = useCart();
  const { user } = useUser();
 
    const navigate = useNavigate()
 

    
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


   
  return (
      <div className="mt-10 max-w-6xl mx-auto mb-5">
      {cartItems.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl mb-5 text-white">
            My Cart({cartItems.length})
          </h1>
          <div>
            <div className="mt-10 ">
              {cartItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 wull"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20"
                      />
                      <div className="w-[300px] line-clamp-3 ml-3">
                        <h1>{item.title}</h1>
                        <p className="text-red-500 font-semibold text-lg">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-500 text-white  flex gap-4 p-2 rounded-md font-bold text-xl ">
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
                      <Trash2 className="text-red-500 text-2xl  cursor-pointer hover:text-red-600" />
                    </span>
                  </div>
                );
              })}
            </div>
            

            <div className="grid grid-cols-2 gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
                <h1 className="text-gray-800 font-bold text-xl">
                  Delivery Info
                </h1>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Full Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="p-2 rounded-md"
                    value={user?.fullName}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address:</label>
                  <input
                    type="text"
                    placeholder="Enter your Address"
                    className="p-2 rounded-md"
                    value={location?.country}
                  />
                </div>
                <div className="w-full flex gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">State:</label>
                    <input
                      type="text"
                      placeholder="Enter your state"
                      className="p-2 rounded-md w-full"
                      value={location?.state}
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">PostCode:</label>
                    <input
                      type="text"
                      placeholder="Enter your postcode"
                      className="p-2 rounded-md w-full"
                      value={location?.postcode}
                    />
                  </div>
                </div>
                <div className="w-full flex gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Country:</label>
                    <input
                      type="text"
                      placeholder="Enter your country"
                      className="p-2 rounded-md w-full"
                      value={location?.country}
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Number:</label>
                    <input
                      type="number"
                      placeholder="Enter your number"
                      className="p-2 rounded-md w-full"
                    />
                  </div>
                </div>


               <button
                 className="bg-red-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer"
                >
                    Submit
              </button>


              </div>
              <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                <h1 className="text-gray-800 font-bold text-xl">
                  Bill Details
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <NotepadText /> 
                    </span>
                    All Product price
                  </h1>
                  <p>{totalPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <Package />
                    </span>
                    <p className="font-pop text-text-gray-700">Delivery in 15–20 days </p>
                  </h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <CreditCard />
                    </span>
                      Users are rewarded  All 25 %
                  </h1>
                  
                </div>
                <hr className="text-gray-200 mt-2" />
                <div className="flex justify-center items-center">
                  <h1 className="font-semibold text-lg">Grand total</h1>
                  <p className="font-semibold text-lg">${totalPrice + 5}</p>
                </div>
                <div>
                  <h1 className="font-semibold text-gray-700 mb-3 mt-7">
                    Apply Promo code
                  </h1>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="p-2 rounded-md w-full border border-gray-200"
                    />
                    <button className="bg-white text-black border border-gray-200 cursor-pointer py-1 px-4 rounded-md">
                      Apply
                    </button>
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-2 w-full cursor-pointer">
                  Proceed to Checkout
                </button>
              </div>
            </div>
            <div className="flex items-center mt-10  justify-center text-gray-700 w-full">
              ---------------
            </div>
          </div>
        </div>
      ) : (
         <div className="flex flex-col gap-3  justify-center items-center h-[600px]">
           <h2 className="text-red-500/80 font-bold text-5xl text-muted">
              Your cart is empty!
          </h2>
          <img src={emptyCart} className="w-[400px]" />
          <button onClick={() => navigate('/')}  className="bg-red-500 text-white px-3  py-2 rounded-md cursor-pointer">Continue Shopping</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
