import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Package } from "lucide-react";
import { IMG_API } from "../api/productApi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleIncrement = (item) => {
    if (updateQuantity) {
      updateQuantity(item._id, item.qty + 1);
    }
  };

  const handleDecrement = (item) => {
    if (item.qty > 1 && updateQuantity) {
      updateQuantity(item._id, item.qty - 1);
    }
  };

  const handleRemove = (itemId) => {
    if (removeFromCart) {
      removeFromCart(itemId);
    }
  };

  if (cart.length === 0) {
    return (
      <>
      <Navbar/>
      <div className="p-8 border border-gray-100">
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Add some products to get started!</p>
          <Link to="/" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2">
            Start Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
    <Navbar/>

    <div className="border border-gray-100 overflow-hidden">
  
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
              <p className="text-blue-100 text-sm">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white font-semibold">{cart.length} {cart.length === 1 ? 'product' : 'products'}</span>
          </div>
        </div>
      </div>


      <div className="p-6 max-h-[500px] overflow-y-auto">
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div 
              key={item._id} 
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex gap-5">
  
                {item.image && (
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                      <img 
                        src={IMG_API+item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {item.rating && (
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                        ⭐ {item.rating}
                      </div>
                    )}
                  </div>
                )}

            
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 pr-4">
                      <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
                      )}
                    </div>
                    
            
                    {removeFromCart && (
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="flex-shrink-0 text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all duration-200"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
     
                    <div className="flex items-center gap-3">
                      {updateQuantity ? (
                        <div className="flex items-center bg-white border-2 border-gray-200 rounded-full overflow-hidden shadow-sm">
                          <button
                            onClick={() => handleDecrement(item)}
                            disabled={item.qty <= 1}
                            className="px-3 py-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="px-4 py-2 font-bold text-gray-900 min-w-[3rem] text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => handleIncrement(item)}
                            className="px-3 py-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      ) : (
                        <div className="bg-gray-100 px-4 py-2 rounded-full">
                          <span className="text-sm text-gray-600">Qty: <span className="font-bold text-gray-900">{item.qty}</span></span>
                        </div>
                      )}
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">₹{item.price} each</p>
                      <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white px-8 py-6">
   
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal ({itemCount} items)</span>
            <span className="font-semibold">₹{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="font-semibold text-green-600">FREE</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
          <div>
            <p className="text-blue-100 text-sm mb-1">Total Amount</p>
            <p className="text-3xl font-bold text-white">₹{total.toLocaleString()}</p>
          </div>
          <Package className="w-12 h-12 text-white/30" />
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group">
          Proceed to Checkout
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
    </>
  );
}