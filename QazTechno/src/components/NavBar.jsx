import {
  MapPin,
  Search,
  ChevronDown,
  ChevronUp,
  ShoppingBasket,
  X,
  Menu,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { navItems } from "../constant/GenerList";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCategories } from "../Server/GlobalApi";
import { useCart } from "../context/CartContext";
import getCategoryIcon from "./CategoryIcon";
import { FilterContext } from "../context/FilterContext";

function NavBar({ location, getLocation }) {
  const [openMobile, setOpenMobile] = useState(false);
  const [openTypes, setOpenTypes] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { cartItems } = useCart();
  const { search, setSearch } = useContext(FilterContext);
  const navigate = useNavigate();

  const { categoryOnlyData, loading, error } = useCategories();

  const toggleOpenMobile = () => {
    setOpenMobile(!openMobile);
  };

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/category/${search.trim().toLowerCase()}`);
      setOpenTypes(false);
    }
  };

  if (loading) return <div className="container-custom">Loading...</div>;
  if (error) return <div className="container-custom">Error: {error}</div>;

  return (
    <nav className="container-custom">
    
      <div className="w-full flex justify-between items-center">
        <div className="mt-3 flex gap-2 items-center">
          <button className="btn-primary">Eng</button>
          <div className="cursor-pointer flex items-center gap-1">
            <MapPin onClick={getLocation} className="text-3xl text-white" />
            <span className="font-semibold text-white">
              {location ? location.state : "add address"}
            </span>
          </div>
        </div>

    
        <ul className="hidden md:flex gap-3 mt-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="bg-gray-100 font-pop rounded-lg p-2 hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Burger Button */}
        <button
          onClick={toggleOpenMobile}
          className="block md:hidden bg-primary p-2 text-white rounded-md m-4 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-red-500"
        >
          {openMobile ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Menu */}
        {openMobile && (
          <div className="fixed top-16 right-3 z-20 w-[200px] bg-primary p-4 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="bg-gray-100 font-pop rounded-lg p-2 hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    
      <div className="w-full relative mt-6 flex justify-between items-center flex-wrap gap-4">
        <h2 className="hidden md:block text-4xl lg:text-6xl font-pop text-red-500 font-semibold">
          QazTechno
        </h2>

        {/* Search Bar */}
        <div className="relative w-[600px] max-w-full flex items-center z-10">
          <div className="w-full bg-primary flex p-1 rounded-[var(--border-radius)]">
        
            <button
              className="bg-white flex items-center gap-1 py-2 px-4 rounded-l-[var(--border-radius)] font-pop"
              onClick={() => setOpenTypes(!openTypes)}
            >
              <span>Types</span>
              {openTypes ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {/* Input */}
            <input
              type="text"
              className="bg-white py-2 px-4 w-full focus:outline-none"
              placeholder="Search from QazTechno"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-primary-dark px-5 rounded-r-[var(--border-radius)] hover:bg-primary-darker"
            >
              <Search className="text-white w-5 h-5" />
            </button>
          </div>

          
          {openTypes && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg p-4 border z-50">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Categories</h3>
                <ChevronUp
                  onClick={() => setOpenTypes(false)}
                  className="cursor-pointer"
                />
              </div>

              <input
                type="text"
                className="input-field w-full mb-4"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />

              <ul className="max-h-60 overflow-y-auto">
                {categoryOnlyData
                  .filter((cat) =>
                    cat.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((cat) => (
                    <li
                      key={cat}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                      onClick={() => {
                        setSearch(cat);
                        setOpenTypes(false);
                        navigate(`/category/${cat}`);
                      }}
                    >
                      {getCategoryIcon(cat)} {cat}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

  
        <div className="flex gap-4">
          <div className="mt-3">
            <SignedOut>
              <SignInButton>
                <button className="btn-secondary">
                  Аккаунтқа кіру
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "w-10 h-10 border-2 border-purple-500 shadow-md",
                    userButtonPopoverCard: "mt-2 rounded-xl",
                  },
                }}
              />
            </SignedIn>
          </div>

          <Link
            to="/cart"
            className="relative p-2 hover:bg-gray-900 rounded-full transition"
          >
            <ShoppingBasket className="w-[40px] h-[40px] text-primary" />
            <span className="bg-red-500 text-white px-2 py-1 rounded-full absolute top-0 -right-1 text-xs font-semibold">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
