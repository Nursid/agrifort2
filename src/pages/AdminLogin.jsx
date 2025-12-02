import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, ShoppingBag, ArrowRight, Package } from "lucide-react";
import axios from "axios";
import { IMG_API } from "../api/productApi";
import Navbar from "../components/Navbar";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    setIsLoading(true);
    setErrors({});
  
    try {
      const res = await axios.post(`${IMG_API}/api/admin/login`, {
        email,
        password
      });

      localStorage.setItem("adminToken", res.data.token);
  
      alert("Login Success!");
      window.location.href = "/admin"; 
  
    } catch (err) {
      setErrors({ email: "Invalid email or password" });
    }
  
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
    <Navbar />
    <div className="w-full min-h-[calc(100vh-100px)] flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
    <div className="w-full max-w-md">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">Admin Login</h2>
              <p className="text-blue-100 text-sm">Sign in to your dashboard</p>
            </div>

            <div className="p-8">
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                      placeholder="admin@eshop.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl pl-12 pr-12 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                    />
                    <span className="ml-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      Remember me
                    </span>
                  </label>
                  <button
                    onClick={() => alert("Forgot password clicked")}
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}