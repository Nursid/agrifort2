import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { IMG_API } from "../api/productApi";
import { ShoppingCart, Star, Plus, Sparkles } from "lucide-react";
import Navbar from "./Navbar";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <>
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img 
          src={IMG_API+product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
        </div>

        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
          >
            {isAdding ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin" />
                Adding...
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
    </>
  );
}

