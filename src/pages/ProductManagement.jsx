import { useState,useEffect } from "react";
import { Plus, Edit, Trash2, X, Star, Search, Package } from "lucide-react";
import { getProducts } from "../api/productApi";
import { IMG_API } from "../api/productApi";


export default function ProductManagement() {


  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "add", "edit", "delete"
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    image: ""
  });

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  const openAddModal = () => {
    setModalType("add");
    setFormData({ title: "", description: "", price: "", rating: "", image: "" });
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setModalType("edit");
    setSelectedProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      price: product.price,
      rating: product.rating,
      image: product.image
    });
    setShowModal(true);
  };

  const openDeleteModal = (product) => {
    setModalType("delete");
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setSelectedProduct(null);
    setFormData({ title: "", description: "", price: "", rating: "", image: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (modalType === "add") {
      const newProduct = {
        _id: Date.now(),
        ...formData,
        price: parseFloat(formData.price),
        rating: parseFloat(formData.rating)
      };
      setProducts([...products, newProduct]);
    } else if (modalType === "edit") {
      setProducts(products.map(p => 
        p._id === selectedProduct._id 
          ? { ...p, ...formData, price: parseFloat(formData.price), rating: parseFloat(formData.rating) }
          : p
      ));
    }
    closeModal();
  };

  const handleDelete = () => {
    setProducts(products.filter(p => p._id !== selectedProduct._id));
    closeModal();
  };

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

<div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Admin Panel
        </h1>
      </div>
      
      <div className="flex gap-6">
            <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                Logout
      </button>
    </div>
    </div>
  </div>


      <div className=" max-w-7xl mx-auto item-center my-10">
        <div className="flex justify-between items-center max-w-7xl mx-auto mb-5">
        <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 w-full pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl 
                        focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
            />
        </div>          
        <button
            onClick={openAddModal}
            className="h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 rounded-lg 
                    font-medium hover:shadow-lg transition-all duration-200 flex items-center gap-2 
                    hover:scale-105 text-sm"
        >
            <Plus className="w-4 h-4" />
            Add Product
        </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Image</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Rating</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                      <Package className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                      <p className="text-lg font-semibold">No products found</p>
                      <p className="text-sm">Try adjusting your search or add a new product</p>
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <img
                          src={IMG_API+product.image}
                          alt={product.title}
                          className="w-16 h-16 rounded-xl object-cover border-2 border-gray-200"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">{product.title}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-600 text-sm line-clamp-2 max-w-xs">
                          {product.description}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-gray-900">₹{product.price}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-gray-900">{product.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => openEditModal(product)}
                            className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors"
                            title="Edit Product"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => openDeleteModal(product)}
                            className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                {modalType === "add" && "Add New Product"}
                {modalType === "edit" && "Edit Product"}
                {modalType === "delete" && "Delete Product"}
              </h2>
              <button
                onClick={closeModal}
                className="text-white hover:bg-white/20 p-1 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {modalType === "delete" ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Are you sure?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Do you want to delete "{selectedProduct?.title}"? This action cannot be undone.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={closeModal}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDelete}
                      className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Product Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      placeholder="Enter product title"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                      placeholder="Enter product description"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Price (₹)
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Rating
                      </label>
                      <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleInputChange}
                        step="0.1"
                        min="0"
                        max="5"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        placeholder="4.5"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  {formData.image && (
                    <div className="mt-2">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded-xl border-2 border-gray-200"
                      />
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={closeModal}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      {modalType === "add" ? "Add Product" : "Save Changes"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}