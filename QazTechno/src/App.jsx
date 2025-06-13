
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './pages/Home';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import CategoryProduct from './pages/CategoryProduct';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Help from './pages/Help';
import UserProductPage from './pages/UserProductPage';

function App() {
   
   const [openTypes, setOpenTypes] = useState(false);


    // location code
  const [location, setLocation] = useState();

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
       
        const location = await axios.get(url);
        const exactLocation = location.data.address
        setLocation(exactLocation);
        setOpenTypes(false);
 
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

   


  return (
       <Router >
        <Navbar
          openTypes={openTypes}
          setOpenTypes={setOpenTypes}
          location={location}
          getlocation={getLocation}
        />

          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<CategoryProduct />} />
                <Route path="/SingleProduct/:id" element={<SingleProduct />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Help" element={<Help />} />
                <Route path="/userproduct" element={<UserProductPage />} />
          </Routes>

        <Footer />  
    </Router>
  )
}

export default App
