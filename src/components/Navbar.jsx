import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div>
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
         Product Listing Page
        </Link>
        <p className="text-gray-600 text-sm mt-1">Discover amazing deals on quality items</p>
      </div>
      
      <div className="flex gap-6">
      <div className="relative">
      <Link to="/cart" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
            <Link to="/admin/login" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
        Admin Login
      </Link>
    </div>
    </div>
  </div>
  );
}
