import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { CategoryProvider } from './Server/GlobalApi'
import { CartProvider } from './context/CartContext.jsx'
import { FilterProvider } from './context/FilterContext';


import { ClerkProvider } from '@clerk/clerk-react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import './index.css'
import App from './App.jsx'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <CartProvider>
        <FilterProvider>
            <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
               <App/>

                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  
                />
            </ClerkProvider>
         </FilterProvider>
       </CartProvider>
    </CategoryProvider>
  </StrictMode>
)
