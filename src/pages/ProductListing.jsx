import Navbar from "../components/Navbar";
import { useEffect, useState, useContext } from "react";
import { ShoppingCart, Star, Plus, Sparkles } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/productApi";


export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
      getProducts().then(res => setProducts(res.data));
    }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1);
  };

  return (
    <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
   
      <div className="max-w-7xl mx-auto px-6 py-12">
        {products.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product._id} 
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>


      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 z-20">
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </div>
    </>
  );
}