import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductManagement from "./pages/ProductManagement";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import AgriFortWebsite from "./pages/AgriFortWebsite";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<AgriFortWebsite />} />
  
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <ProductManagement />
            </ProtectedRoute>
          } 
        />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
