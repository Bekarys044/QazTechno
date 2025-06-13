import { Children, createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';


// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
 
     const [cartItems, setCartItems] = useState([]);

     const addToCart = (item) => {
         
        const itemInCart = cartItems.find((i) => i.id === item.id);

        if (itemInCart) {
            const updatedCart = cartItems.map((i) => 
              i.id === item.id 
              ? { ...i, quantity: i.quantity + 1}
              : i
            );

            setCartItems(updatedCart);
        }else{
            setCartItems([ ...cartItems, {...item, quantity: 1}]);
            toast.success("Product added to cart!");
        }
     }


     const updateQuantity = (productId, action) => {
        setCartItems(
           cartItems.map((item) => {
              if (item.id === productId) {
                let newUnit = item.quantity;
                if (action === 'increase') {
                  newUnit = newUnit + 1;
                  toast.success("Quantity increased!");
                }else if(action === 'decrease') {
                   newUnit = newUnit - 1;
                   toast.error("Quantity decreased!");
                }

                return newUnit > 0 ? { ...item, quantity: newUnit } : null;
              }
              return item;
           }).filter((item) => item != null)
        );
     };



     const delateItem = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
        toast.error("Product deleted from cart!");
     } 




     return <CartContext.Provider value={{cartItems, setCartItems, addToCart, updateQuantity,  delateItem}}>
        {children}
     </CartContext.Provider>

}


// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);