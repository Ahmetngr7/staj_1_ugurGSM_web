import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const menuItems = [
    { name: "Anasayfa", path: "/" },
    { name: "Kategoriler", path: "/kategoriler" },
    { name: "Ürünler", path: "/urunler" },
    { name: "İletişim", path: "/iletisim" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-white">TechMağaza</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-tech-blue border-b-2 border-tech-blue"
                    : "text-white hover:text-tech-cyan hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/giris"
              className="flex items-center space-x-1 text-white hover:text-tech-cyan transition-colors"
            >
              <User size={18} />
              <span>Giriş Yap</span>
            </Link>
            <Link to="/kayit" className="tech-button text-sm py-2 px-4">
              Kayıt Ol
            </Link>
            <Link
              to="/sepet"
              className="relative p-2 text-white hover:text-tech-cyan transition-colors"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-tech-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-tech-cyan transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-card mt-2 p-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-tech-blue bg-tech-blue/10"
                    : "text-white hover:text-tech-cyan hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-3 space-y-2">
              <Link
                to="/giris"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 text-white hover:text-tech-cyan transition-colors"
              >
                <User size={18} />
                <span>Giriş Yap</span>
              </Link>
              <Link
                to="/kayit"
                onClick={() => setIsOpen(false)}
                className="block tech-button text-center"
              >
                Kayıt Ol
              </Link>
              <button className="flex items-center space-x-2 px-3 py-2 text-white hover:text-tech-cyan transition-colors">
                <ShoppingCart size={18} />
                <span>Sepet (0)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
