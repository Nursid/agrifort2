import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: 'About Us', href: '#about' },
    { name: 'Leadership People', href: '#leadership' },
    { name: 'Our Portfolio', href: '#portfolio' },
    { name: 'Family Vibes', href: '#family' },
    { name: 'AgriFort Highlights', href: '#highlights' },
  ];
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-2 rounded-lg">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            AgriFort
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#registration" className="text-green-700 hover:text-green-800 font-medium">
            Registration Centre
          </a>
          <a href="#login" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200">
            Workplace Login
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </nav>

    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-white border-t">
        <div className="px-4 py-4 space-y-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t space-y-2">
            <a href="#registration" className="block text-green-700 font-medium py-2">
              Registration Centre
            </a>
            <a href="#login" className="block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-center">
              Workplace Login
            </a>
          </div>
        </div>
      </div>
    )}
  </header>
  );
}
